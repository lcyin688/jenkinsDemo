const os = require('os');
const child_process = require('child_process');
const crypto = require('crypto');
const compressing = require('compressing');
const mfs = require('./mfs');

/**
 * 带时间戳的日志
 * @param  {...any} data
 */
function log(...data) {
    // eslint-disable-next-line no-console
    console.log(formatDate(new Date(), 'HH:mm:ss.SSS'), ...data);
}
module.exports.log = log;

/**
 * 打印obj
 * @param {string} tag
 * @param {object} obj
 */
function logObj(tag, obj) {
    log(`${tag}: ${JSON.stringify(obj, null, 4)}`);
}
module.exports.logObj = logObj;

/**
 * 格式化Date
 * @param {Date} date
 * @param {string} fmt
 * @returns {string}
 * @example
 * yyyy-MM-dd HH:mm:ss => 2021-03-17 21:08:36
 * yyyy-M-d H:m:s => 2021-3-17 21:8:36
 */
function formatDate(date, fmt = 'yyyy-MM-dd HH:mm:ss.SSS') {
    let opt = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'S+': date.getMilliseconds(),
    };

    for (const key in opt) {
        let ret = new RegExp('(' + key + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], opt[key].toString().padStart(ret[1].length, '0'));
        }
    }

    return fmt;
}
module.exports.formatDate = formatDate;

/**
 * 毫秒 转为 时:分:秒
 * @param {number} mss 毫秒
 * @returns
 */
function formatDuration(mss) {
    let ss = mss / 1000;
    let hours = Math.floor(ss / 3600)
        .toString()
        .padStart(2, '0');
    let minutes = Math.floor((ss % 3600) / 60)
        .toString()
        .padStart(2, '0');
    let seconds = Math.floor(ss % 60)
        .toString()
        .padStart(2, '0');
    let str = `${hours}:${minutes}:${seconds}`;
    return str;
}
module.exports.formatDuration = formatDuration;

/**
 * 字段计数
 * @param {string} str
 * @param {string} field
 */
function fieldCount(str, field) {
    let reg = new RegExp(`\\b${field}\\b`, 'g');
    let ret = str.match(reg);
    let count = ret ? ret.length : 0;

    return count;
}
module.exports.fieldCount = fieldCount;

/**
 * zip压缩
 * @param {string[]} dirs
 * @param {boolean} remove 是否移除源文件，默认是
 */
function zipDirs(dirs, remove = true) {
    return new Promise((resolve, reject) => {
        if (!(dirs && dirs.length > 0)) {
            reject();
        }

        let success = 0;
        for (let i = 0; i < dirs.length; i++) {
            compressing.zip
                .compressDir(dirs[i], dirs[i] + '.zip')
                .then(() => {
                    if (remove) {
                        mfs.rm(dirs[i]);
                    }

                    success++;
                    if (success === dirs.length) {
                        resolve();
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
}
module.exports.zipDirs = zipDirs;

/**
 * zip解压
 * @param {string[]} files
 * @param {boolean} remove 是否移除源文件，默认是
 */
function unzip(files, remove = true) {
    return new Promise((resolve, reject) => {
        if (!(files && files.length > 0)) {
            reject();
        }

        let success = 0;
        for (let i = 0; i < files.length; i++) {
            compressing.zip
                .uncompress(files[i], mfs.dirname(files[i]))
                .then(() => {
                    if (remove) {
                        mfs.rm(files[i]);
                    }

                    success++;
                    if (success === files.length) {
                        resolve();
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
}
module.exports.unzip = unzip;

/**
 * 字符串匹配
 * @param {string} str
 * @param {(string | RegExp)[]} parts
 */
function strMatch(str, parts) {
    for (let i = 0; i < parts.length; i++) {
        if (str.match(parts[i])) {
            return true;
        }
    }
    return false;
}
module.exports.strMatch = strMatch;

/**
 * 字符串首字母大写
 * @param {string} str
 */
function strUpperFirst(str) {
    if (!str) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports.strUpperFirst = strUpperFirst;

/**
 * 执行cmd
 * @param {string} cmd
 */
function exec(cmd) {
    log(`utils exec, cmd: ${cmd}`);

    return new Promise((resolve, reject) => {
        child_process.exec(cmd, (error, stdout, stderr) => {
            if (error) {
                log(`utils exec, error: ${JSON.stringify(error)}`);
                reject(error);
            } else {
                resolve(stdout, stderr);
            }
        });
    });
}
module.exports.exec = exec;

/**
 * 是否是mac
 */
function isMac() {
    return os.platform() === 'darwin';
}
module.exports.isMac = isMac;

/**
 * 是否是windows
 */
function isWindows() {
    return os.platform() === 'win32';
}
module.exports.isWindows = isWindows;

/**
 * md5
 * @param {string | Buffer | NodeJS.TypedArray | DataView} data
 */
function md5(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}
module.exports.md5 = md5;

/**
 * 移除隐藏文件
 * @param {string} dir
 */
function removeHiddenFile(dir) {
    let files = mfs.readDirFiles(dir);
    files.forEach((file) => {
        // .DS_Store
        if (mfs.basename(file)[0] === '.') {
            log(`移除隐藏文件 => ${file}`);
            mfs.rm(file);
        }
    });
}
module.exports.removeHiddenFile = removeHiddenFile;

/**
 * 查找文件
 * @param {string} dir
 * @param {RegExp} reg
 * @returns 返回文件路径
 */
function findFile(dir, reg) {
    let file = '';
    let files = mfs.readDirFiles(dir);
    let matchedFiles = files.filter((file) => {
        return reg.test(file);
    });

    if (matchedFiles.length == 1) {
        file = matchedFiles[0];
    } else if (matchedFiles.length > 1) {
        log(`查找文件 => 匹配到多个文件 ${reg}`);
    }

    return file;
}
module.exports.findFile = findFile;
