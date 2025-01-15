const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const os = require('os');
// const tinypng = require('tinify');
/**
 * 是否是mac
 */
function isMac() {
    return os.platform() === 'darwin';
}

/**
 * 是否是文件
 * @param {string} strPath
 */
function isFile(strPath) {
    try {
        const stat = fs.statSync(strPath);
        return stat.isFile();
    } catch (error) {}

    return false;
}

/**
 * 字段计数
 * @param {string} str
 * @param {string} field
 */
function fieldCount(str, field) {
    // 检查输入是否为字符串
    if (typeof str !== 'string' || typeof field !== 'string') {
        return 0;
    }

    // 转义正则表达式中的特殊字符
    const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // 创建正则表达式并匹配
    const matches = str.match(new RegExp(`\\b${escapedField}\\b`, 'g'));

    // 返回匹配结果的数量
    return matches ? matches.length : 0;
}

/**
 * 是否是软链接
 * @param {string} strPath
 */
function isSymbolicLink(strPath) {
    try {
        const stat = fs.lstatSync(strPath);
        return stat.isSymbolicLink();
    } catch (error) {}

    return false;
}
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
/**
 * 软链接
 * @param {string} srcPath
 * @param {string} dstPath
 */
function symlink(srcPath, dstPath) {
    if (!fs.existsSync(srcPath)) {
        console.log(`mfs symlink err, srcPath: ${srcPath}`);
        return false;
    }

    let dstParentDir = path.join(dstPath, '..');
    if (!fs.existsSync(dstParentDir)) {
        mkdir(dstParentDir);
    }

    if (fs.existsSync(dstPath) && isSymbolicLink(dstPath)) {
        try {
            const sourcePath = fs.readlinkSync(dstPath);
            if (sourcePath == srcPath) {
                // 如果当前软链和源路径一致，则直接成功
                return true;
            } else {
                // 否则删除软链重新链接
                rm(dstPath);
            }
        } catch (err) {
            console.log(`mfs symlink readlinkSync err: ${err.message}`);
        }
    }

    try {
        fs.symlinkSync(srcPath, dstPath);
    } catch (err) {
        console.log(`mfs symlink symlinkSync err: ${err.message}`);
        return false;
    }

    return true;
}

/**
 * 删除文件/文件夹/软链接
 * @param {string} strPath
 */
function removeFire(strPath) {
    if (!fs.existsSync(strPath)) {
        return;
    }

    if (isSymbolicLink(strPath) || isFile(strPath)) {
        fs.unlinkSync(strPath);
        return;
    }

    let files = fs.readdirSync(strPath);
    files.forEach((file) => {
        let fullPath = path.join(strPath, file);
        if (isSymbolicLink(fullPath) || isFile(fullPath)) {
            fs.unlinkSync(fullPath);
        } else if (isDirectory(fullPath)) {
            removeFire(fullPath);
        }
    });

    fs.rmdirSync(strPath);
}

/**
 * 是否是文件夹
 * @param {string} strPath
 */
function isDirectory(strPath) {
    try {
        const stat = fs.statSync(strPath);
        return stat.isDirectory();
    } catch (error) {}

    return false;
}

/**
 * 创建文件夹
 * @param {string} strPath
 * @param {string} mode
 * @returns 成功则返回 true
 */
function mkdir(strPath, mode) {
    if (fs.existsSync(strPath)) {
        return true;
    }

    if (mkdir(path.dirname(strPath), mode)) {
        try {
            fs.mkdirSync(strPath, mode);
            return true;
        } catch (error) {
            return false;
        }
    }

    return false;
}

/**
 * 复制文件/文件夹
 * @param {string} srcPath
 * @param {string} dstPath
 * @param {string[]} excludes 排除列表
 * @returns 成功则返回 true
 */
function copeFire(srcPath, dstPath, excludes = []) {
    if (!fs.existsSync(srcPath)) {
        console.log(`mfs cp err, srcPath: ${srcPath}`);
        return false;
    }

    if (isFile(srcPath)) {
        fs.copyFileSync(srcPath, dstPath);
        return true;
    }

    let files = fs.readdirSync(srcPath);
    files.forEach((file) => {
        let srcFullPath = path.join(srcPath, file);
        if (strMatch(srcFullPath, excludes)) {
            // 如果在排除列表中，直接跳过
            return;
        }

        let dstFullPath = path.join(dstPath, file);
        if (isFile(srcFullPath)) {
            mkdir(dstPath);
            fs.copyFileSync(srcFullPath, dstFullPath);
        } else if (isFile(srcFullPath)) {
            mkdir(dstFullPath);
            return cp(srcFullPath, dstFullPath, excludes);
        }
    });

    return true;
}



/**
 * 压缩图片
 */
function compressImages(successCallback) {
    if (tiny != 1) {
        successCallback();
        return;
    }

    console.log(`压缩图片 => 开始`);

    let compressedPath = path.join(buildProjectPath, 'build', defaultTemplate, 'assets');
    if (!isMain) {
        compressedPath = path.join(compressedPath, config.bundle);
    }

    // 这里只压缩自动图集，碎图在项目内压缩
    let srcDir = path.join(compressedPath);
    let dstDir = path.join(compressedPath + '-compressed');
    let ignoreFiles = [/([a-z0-9]{8})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{12})/];
    tinypng.compressDirImages(srcDir, dstDir, [], ignoreFiles, (errorCount) => {
        if (errorCount == 0) {
            if (!copeFire(dstDir, srcDir)) {
                console.log('压缩图片 => 覆盖失败');
            } else {
                removeFire(dstDir);
                console.log('压缩图片 => 成功');
                successCallback();
            }
        }
    });
}

/**
 * 拷贝 h5 loading
 */
function copyH5Loading() {
    utils.log(`拷贝 h5 loading => 开始`);

    let loadingNames = [`splash.jpg`, `donut.png`];
    for (let i = 0; i < loadingNames.length; i++) {
        let loadingName = loadingNames[i];
        let srcPath = mfs.join(projectPath, 'build-templates', 'h5-flavor', 'loading', config.skinCode, loadingName);
        if (!mfs.exists(srcPath)) {
            utils.log(`拷贝 h5 loading => 失败, loading ex: ${loadingName}`);
            return false;
        }

        let ret = mfs.cp(srcPath, mfs.join(buildProjectPath, 'build-templates', defaultTemplate, loadingName));
        if (!ret) {
            utils.log(`拷贝 h5 loading => 失败, loading cp: ${loadingName}`);
            return false;
        }
    }

    utils.log(`拷贝 h5 loading => 成功`);
    return true;
}

// /**
//  * 创建工程 step: 1
//  */
// function createProject() {
//     console.log(`创建工程 => 开始`);

//     removeFire(buildProjectPath);
//     mkdir(buildProjectPath);

//     let bundles = [];
 

//     let files = [`project.json`, `tsconfig.json`, `settings`, `build-templates`];
//     let excludes = []; // 拷贝排除的目录

//     let ret = true;
//     for (let i = 0; i < files.length; i++) {
//         let srcPath =path.join(projectPath, files[i])
//         let dstPath =path.join(buildProjectPath, files[i])
//         if (!copeFire(srcPath, dstPath, excludes)) {
//             ret = false;
//             break;
//         }
//     }

//     if (!ret) {
//         console.log(`创建工程 => 失败, project`);
//         return;
//     }


//     // if (!symlink(path.join(projectPath, `node_modules`), path.join(buildProjectPath, `node_modules`))) {
//     //     console.log(`创建工程 => 失败, node_modules`);
//     //     return;
//     // }

//     // if (!copyH5Loading()) {
//     //     return;
//     // }

//     console.log(`创建工程 => 成功`);
//     buildProject();
// }

/**
 * 构建工程 step: 2
 */
function buildProject() {
    console.log(`构建工程 => 开始`);
    let  tempPlateName ="jsb-link"
    // 校准构建配置-settings
    let settingsBuildConfPath = path.join(projectPath, 'settings', 'builder.json');
    let settingsBuildConf = JSON.parse(fs.readFileSync(settingsBuildConfPath, { encoding: 'utf-8' }));
    settingsBuildConf.md5Cache = true;
    settingsBuildConf.nativeMd5Cache = false;
    settingsBuildConf.inlineSpriteFrames = true;
    settingsBuildConf.inlineSpriteFrames_native = false;
    settingsBuildConf.mergeStartScene = false;
    settingsBuildConf.optimizeHotUpdate = false;
    settingsBuildConf.mergeStartScene = false;
    fs.writeFileSync(settingsBuildConfPath, JSON.stringify(settingsBuildConf, null, 2) + '\n');


    // 移除旧版本
    removeFire(path.join(buildProjectPath, tempPlateName));
    let cmd = `${enginePath} --path ${projectPath} --build `;
    let params = [`platform=${defaultTemplate}`, `debug=true`];

    for (let i = 0; i < params.length; i++) {
        cmd = cmd + (i === 0 ? '' : ';') + params[i];
    }
    console.log(`构建工程 => cmd: `,cmd);
    
    new Promise((resolve, reject) => {
        child_process.exec(cmd, (error, stdout, stderr) => {

            // Built to "/Volumes/work/jenkinsDemo/build/jenkinsDemoAnd/web-mobile" successfully
            if (!stdout.includes(`Built to "${path.join(buildProjectPath,"jsb-link")}" successfully`)) {
                console.log(`构建工程 => stdout: ${stdout}`);
                console.log(`构建工程 => stderr: ${stderr}`);
                console.log(`构建工程 => 失败`);
            } else {
                let buildLog = stdout.substr(stdout.indexOf('[build-start]'));
                console.log(`构建工程 => buildLog: ${buildLog}`);

                // 异常日志
                let exceptionLog = '';

                // Warning
                let warnBlocks = buildLog.match(/Warning:[\s\S]*?(?=\[\d+\]|$)/g);
                if (warnBlocks && warnBlocks.length > 0) {
                    warnBlocks.forEach((block) => {
                        exceptionLog += `${block}`;
                    });
                }

                // Error
                let errorBlocks = buildLog.match(/Error:[\s\S]*?(?=\[\d+\]|$)/g);
                if (errorBlocks && errorBlocks.length > 0) {
                    errorBlocks.forEach((block) => {
                        exceptionLog += `${block}`;
                    });
                }

                // if (exceptionLog.length > 0) {
                //     // 写入文件供 jenkins 读取
                //     path.writeFileSync(path.join(projectPath, 'build_cc.log'), exceptionLog);
                // }

                let warnCount = fieldCount(buildLog, 'Warning');
                if (warnCount > 0) {
                    console.log(`构建工程 => 警告: ${warnCount}`);
                }

                let errorCount = fieldCount(buildLog, 'Error');
                if (errorCount > 0) {
                    console.log(`构建工程 => 错误: ${errorCount}`);
                }

                if (warnCount > 0 || errorCount > 0) {
                    return;
                }

                console.log(`构建工程 => 成功`);

                setTimeout(() => {
                    compressImages(() => {
                        // createBundle();
                    });
                });
            }
        });
    });







}

/**
 * 创建分包 step: 3
 */
function createBundle() {
    let bundlePaths = [];
    if (isMain) {
        for (let i = 0; i < config.envs.length; i++) {
            let bundlePath = createMainBundle(config.envs[i]);
            if (bundlePath) {
                bundlePaths.push(bundlePath);
            } else {
                return;
            }

            // if (config.brand) {
            //     // h5 品牌独立更新
            //     let brandDir = config.bundle + '_' + config.skinCode + '_' + config.brand + '_' + config.version.split('-')[0];
            //     let brandPath = mfs.join(bundleRootPath, 'hall', config.bundle, config.country, config.envs[i], brandDir);
            //     mfs.rm(brandPath);
            //     mfs.mkdir(brandPath);

            //     let ret = mfs.cp(mfs.join(bundlePath, `index-${config.brand}.html`), mfs.join(brandPath, `index-${config.brand}.html`));
            //     ret = ret && mfs.cp(mfs.join(bundlePath, 'icon', config.brand), mfs.join(brandPath, 'icon', config.brand));

            //     // manifest
            //     let manifestPath = console.findFile(bundlePath, new RegExp(`manifest-${config.brand}\.([a-z0-9]{5})\.json`, 'g'));
            //     if (!manifestPath) {
            //         console.log(`创建分包 => 失败, manifestPath`);
            //         return;
            //     }

            //     let manifestNane = mfs.basename(manifestPath);
            //     ret = mfs.cp(mfs.join(bundlePath, manifestNane), mfs.join(brandPath, manifestNane));
            //     if (!ret) {
            //         console.log(`创建分包 => 失败, cp brandPath`);
            //         return;
            //     }

            //     bundlePaths.push(brandPath);
            // }
        }
    } else {
        let bundlePath = createSubBundle();
        if (bundlePath) {
            bundlePaths.push(bundlePath);
        } else {
            return;
        }
    }

    console.logObj(`创建分包 => bundlePaths`, bundlePaths);

    for (let i = 0; i < bundlePaths.length; i++) {
        console.removeHiddenFile(bundlePaths[i]);
    }
    zipDirs(bundlePaths, false)
        .then(() => {
            console.log(`创建分包 => 成功`);
            finalize(bundlePaths);
        })
        .catch((err) => {
            console.log(`创建分包 => 失败, zip bundlePaths, err: ${err}`);
        });
}

/** 默认模板 */
const defaultTemplate = 'android';
const tiny = 0;
const curPath = path.dirname(process.argv[1]);
/** 是否主包 */
const isMain = true;
console.log(`study 001`, process.argv);
/** 项目路径 */
const projectPath = path.join(curPath, '..', '..');
console.log(`study 002 projectPath: ${projectPath}`);

const buildProjectPath = path.join(projectPath, 'build');

let enginePath = '';
if (isMac()) {
    enginePath = `/Applications/Cocos/Creator/2.4.11/CocosCreator.app/Contents/MacOS/CocosCreator`;
} else if (console.isWindows()) {
    enginePath = `C:/CocosDashboard/resources/.editors/Creator/2.4.11/CocosCreator.exe`;
}

// let cmd = `${enginePath} --path ${buildProjectPath} --build `;
// let params = [`platform=${defaultTemplate}`, 
//               `debug=0`
// ];

// for (let i = 0; i < params.length; i++) {
//     cmd = cmd + (i === 0 ? '' : ';') + params[i];
// }
//测试
// cmd=" /Applications/Cocos/Creator/2.4.11/CocosCreator.app/Contents/MacOS/CocosCreator --path /Volumes/work/jenkinsDemo/build --compile"


// console.log(`study 001 cmd  : ${cmd}`);
// new Promise((resolve, reject) => {
//     child_process.exec(cmd, (error, stdout, stderr) => {

//         if (error) {
//             console.log(` study exec 001 , error: ${JSON.stringify(error)}`);
//             reject(error);
//         } else {
//             console.log(` study exec 002, stdout: ${stdout}`);
//             console.log(` study exec 003, stderr: ${stderr}`);
//             resolve(stdout, stderr);
//         }
//     });
// });
// createProject()
buildProject()