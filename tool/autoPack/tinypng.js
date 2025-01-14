const mfs = require('../lib/mfs');
const utils = require('../lib/utils');
const tinify = require('tinify');

const COMPRESS_TYPE = {
    ERROR: 0, // 错误
    SUCCESS: 1, // 成功
};

/** tinify key 列表 */
const tinifyKeys = [
    'hS59sm63S2jjyDKp8w2yBNTstTXNWLFd',
    'B3P1g8w8J42wjZKyygwKJmVx2TlbV5rv',
    'jZGnNk1QTmFQ9lLgqVHFSLKwb6Bjjfpj',
    'kVH9Yh9Dhqt2xvgqRMwx19dJFB7wmkkX',
    '3T4LJkznFkjr0zFzwKvbskQ2SQjhWps6',

    'qKbZydJkFb525nNMwxkV1ctKVPGN6Ks1',
    '82Jb7YLmY71K6TpgxYSR5xXWQS4j7h2q',
    'TJNNdFy76xLJSndNTnKBDV6HK15fG9N0',
    'twQ2GpzpH2h0QtNX3z5pQNdQ1pl7GFx6',
    'prvztm52HTtPXBjhYvdBvkXWPl8g9C3c',

    'RVrCFQp1DHP56LNpWBLJ5SG4pgtnfgFM',
    'PWlGC0p82HW88FDX7v1mTJW5CrM3WgxV',
    'hxXBpBZBrw0XV0fvXQGfNS6lFy6fn5H0',
    'dN2w8kx3CnFpzPMZkFTy785y2mjPc3DY',
    'cLQMFSMrvY2zLhS4lq2dnn575LzpSMMk',

    'CKYmFKBm50qVtdKdwcD5MRyQtvQ07rsQ',
    '7XmnfR1JwDdF0PsNrW831y3vKdclHwyc',
    'PPJyqb5tVq8F8cKRZj8Xsw6VqR3h6h0s',
    '3rmMP62n7YtjQ3KYDSqRdZdVMPhKT67X',
    'QVhqhqgB1K22Bd3NW28HnVsKpPgqmfD3',

    'HpZzMnMNlQSWjgHYkbHrrKM86xl9XS7x',
    'zFh7vnCtTbBp5W4Xvy0885ZZW3FHpt3q',
    'LYCsH833czTXqqKBd1BgzJdYsHMsCNl6',
    'vsKDwqrgmvfFsTMd46rj2C4tG4k8clVY',
    'YkLb82Tz6SVlBsw78Vq6s4zls0504kpB',

    'NzbXdxzyCB0bfWFJtsvrXntb91MCjVPr',
    'NNl9550lXQnwmjvs4Bj59RWdmfW8wLWD',
    'gQLGPtgwyvQ1VctJj6SbDb5ZLM3WvDr5',
    'BXh5VyvsNHhWCx2wX9gs04VDp9X5PwWt',
    'g9y1kNQlpQxTghrYFt3TXG1TTsKbmzzB',

    '7BjVQYXF7BQ1pxtSQMWsB8D8J34FJfTN',
    'Qw65HDPQXJnpCVR87zTvcXXGhHsypdrQ',
    'Fp4yHbJ5lhHLqkk9RZPhFDzvKm0ZzDZs',
    'Xp0zwfXygXb8y9BdyjVQwPmgtfpM8Dbl',
    'YrSGsqTCJSYWxJb7LL64r5Ch7Kwy4Z5m',

    'KmjFQZW7PYmcsy9xYXhtMBPW05GkNY5H',
    '6RfsghrRhJPnl3dD14Vlc00vdDLgp2xs',
    'mdvbkvKVHHltG63GRD15yKG4wrJMrz9p',
    '8Z809YSvblMNbmdLX1Bg6LkjLbqGZvNc',
    'Xg2bPH6jqGYxXP6665njC1ZwFFsmgqY2',

    'ZL58Jvkw8dgpsGVws2DpCs89fDCpQ68X',
    'Y40pnfZ8WTtktwSFCtf918b4zTXznQng',
];

let startTime = 0;
/** tinify key 索引 */
let tinifyKeyIndex = -1;
/** tinify key 锁 */
let tinifyKeyLock = false;
/** tinify 最大压缩数量 */
let tinifyMaxCompressionCount = 500;
/** 最大并发任务 */
let maxConcurrentTask = 500;
/** 当前并发任务 */
let curConcurrentTask = 0;
/** 需要压缩的图片集合 */
let imagesObj = {};
/** 最大重试次数 */
let maxRetryCount = 5;
/** 源目录绝对路径 */
let mSrcDir = '';
/** 完成回调 */
let mCompleteCallback = null;

/**
 * 读取参数
 */
function readArgvs() {
    let srcDir = '';
    let dstDir = '';

    let i = 2;
    while (i < process.argv.length) {
        let arg = process.argv[i];
        switch (arg) {
            case '-sd':
            case '-srcDir':
                srcDir = process.argv[i + 1];
                i += 2;
                break;
            case '-dd':
            case '-dstDir':
                dstDir = process.argv[i + 1];
                i += 2;
                break;
            default:
                i++;
                break;
        }
    }

    if (srcDir) {
        let cover = false;
        if (!dstDir) {
            dstDir = srcDir + '-compressed';
            cover = true;
        }

        compressDirImages(srcDir, dstDir, [], [], () => {
            if (cover) {
                if (!mfs.cp(dstDir, srcDir)) {
                    utils.log('压缩图片 => 覆盖失败');
                } else {
                    mfs.rm(dstDir);
                }
            }
        });
    }
}

readArgvs();

/**
 * 压缩目录下图片
 * @param {string} srcDir 源目录绝对路径
 * @param {string} dstDir 目的目录绝对路径
 * @param {string | RegExp[]} ignoreDirs 忽略目录列表
 * @param {string | RegExp[]} ignoreFiles 忽略文件列表
 * @param {(errorCount: number) => void} completeCallback 完成回调
 * @example compressDirImages('/a/b', '/a/b', ['/b/bb', '/b1', /b2/], ['.jpg', '_ccc_', '_xxx.png', /ddd/], (errorCount) => { });
 */
function compressDirImages(srcDir, dstDir, ignoreDirs = [], ignoreFiles = [], completeCallback = null) {
    utils.log(`压缩图片 => 开始`);
    startTime = new Date().getTime();

    mSrcDir = srcDir;
    mCompleteCallback = completeCallback;

    mfs.mkdir(dstDir);

    let extnames = ['.png', '.jpg', '.jpeg'];

    let files = mfs.readDirFiles(srcDir);
    files.forEach((file) => {
        if (extnames.includes(mfs.extname(file).toLowerCase())) {
            if (!utils.strMatch(mfs.dirname(file), ignoreDirs)) {
                if (!utils.strMatch(mfs.basename(file), ignoreFiles)) {
                    imagesObj[file] = {
                        srcPath: file,
                        dstPath: file.replace(srcDir, dstDir),
                        type: COMPRESS_TYPE.ERROR,
                        retryCount: 0,
                        srcSize: mfs.size(file),
                        dstSize: 0,
                    };
                }
            }
        }
    });

    let compressedCount = 0;
    let totalCount = 0;
    for (const key in imagesObj) {
        let imageObj = imagesObj[key];
        if (mfs.exists(imageObj.dstPath) && mfs.isFile(imageObj.dstPath) && mfs.size(imageObj.dstPath) > 0) {
            imageObj.type = COMPRESS_TYPE.SUCCESS;
            compressedCount++;
        }
        totalCount++;
    }

    if (compressedCount > 0) {
        utils.log(`压缩图片 => 总数: ${totalCount}, 已压缩: ${compressedCount}`);
    } else {
        utils.log(`压缩图片 => 总数: ${totalCount}`);
    }

    if (compressedCount === totalCount) {
        compressComplete();
        return;
    }

    setTinifyKey(() => {
        compressDispatch();
    });
}

/**
 * 设置 tinify key
 */
function setTinifyKey(successCallback) {
    if (tinifyKeyLock) {
        return;
    }

    tinifyKeyLock = true;
    tinifyKeyIndex++;
    if (tinifyKeyIndex < 0) {
        tinifyKeyIndex = 0;
    }

    if (tinifyKeyIndex >= tinifyKeys.length) {
        utils.log(`setTinifyKey, key 用完了`);
        compressComplete();
        return;
    }

    tinify.key = tinifyKeys[tinifyKeyIndex];
    tinify.validate((err) => {
        tinifyKeyLock = false;
        if (err) {
            utils.log(`setTinifyKey, err: ${err}`);
            setTinifyKey(successCallback);
        } else {
            utils.log(`setTinifyKey, tinifyKeys[${tinifyKeyIndex}]: ${tinifyKeys[tinifyKeyIndex]}, compressionCount: ${tinify.compressionCount}`);
            if (tinify.compressionCount != null && tinify.compressionCount >= tinifyMaxCompressionCount) {
                setTinifyKey(successCallback);
            } else {
                maxConcurrentTask = tinifyMaxCompressionCount - tinify.compressionCount;
                utils.log(`setTinifyKey, maxConcurrentTask: ${maxConcurrentTask}`);
                successCallback();
            }
        }
    });
}

/**
 * 压缩调度
 */
function compressDispatch() {
    for (const key in imagesObj) {
        let imageObj = imagesObj[key];
        if (imageObj.type === COMPRESS_TYPE.ERROR) {
            if (imageObj.retryCount < maxRetryCount) {
                if (curConcurrentTask >= maxConcurrentTask) {
                    return;
                }

                curConcurrentTask++;
                imageObj.retryCount++;
                compressProcess(imageObj.srcPath, imageObj.dstPath);
            } else {
                utils.log(`compressDispatch, retryCount: ${imageObj.retryCount}, srcPath: ${imageObj.srcPath}`);
            }
        }
    }
}

/**
 * 压缩过程
 * @param {string} srcPath
 * @param {string} dstPath
 */
function compressProcess(srcPath, dstPath) {
    mfs.mkdir(mfs.dirname(dstPath));
    tinify.fromFile(srcPath).toFile(dstPath, (err) => {
        if (err) {
            if (err instanceof tinify.AccountError) {
                // Verify your API key and account limit.
                utils.log(`tinify AccountError, file: ${srcPath}, err: ${err}`);
            } else if (err instanceof tinify.ClientError) {
                // Check your source image and request options.
                utils.log(`tinify ClientError, file: ${srcPath}, err: ${err}`);
            } else if (err instanceof tinify.ServerError) {
                // Temporary issue with the Tinify API.
                utils.log(`tinify ServerError, file: ${srcPath}, err: ${err}`);
            } else if (err instanceof tinify.ConnectionError) {
                // A network connection error occurred.
                utils.log(`tinify ConnectionError, file: ${srcPath}, err: ${err}`);
            } else {
                // Something else went wrong, unrelated to the Tinify API.
                utils.log(`tinify OtherError, file: ${srcPath}, err: ${err}`);
            }

            compressResult(srcPath, COMPRESS_TYPE.ERROR);
        } else {
            compressResult(srcPath, COMPRESS_TYPE.SUCCESS);
        }
    });
}

/**
 * 压缩结果
 * @param {string} srcPath
 * @param {number} type
 */
function compressResult(srcPath, type) {
    let imageObj = imagesObj[srcPath];
    imageObj.type = type;

    if (imageObj.type === COMPRESS_TYPE.ERROR) {
        utils.log(`compressResult err type, srcPath: ${srcPath}`);
        if (mfs.exists(imageObj.dstPath)) {
            mfs.rm(imageObj.dstPath);
        }
    } else {
        if (!mfs.exists(imageObj.dstPath)) {
            utils.log(`compressResult err file, srcPath: ${srcPath}`);
            imageObj.type = COMPRESS_TYPE.ERROR;
        }
    }

    curConcurrentTask--;
    if (curConcurrentTask === 0) {
        let uncompressed = false;
        for (const key in imagesObj) {
            let imageObj = imagesObj[key];
            if (imageObj.type === COMPRESS_TYPE.ERROR) {
                if (imageObj.retryCount < maxRetryCount) {
                    uncompressed = true;
                    break;
                }
            }
        }

        if (uncompressed) {
            setTinifyKey(() => {
                compressDispatch();
            });
        } else {
            compressComplete();
        }
    }
}

/**
 * 压缩完成
 */
function compressComplete() {
    let totalCount = 0;
    let errorCount = 0;
    let repetCount = 0;
    let srcSizeCount = 0;
    let dstSizeCount = 0;

    for (const key in imagesObj) {
        totalCount++;
        let imageObj = imagesObj[key];
        if (imageObj.type === COMPRESS_TYPE.ERROR) {
            imageObj.dstSize = imageObj.srcSize;
            errorCount++;
            utils.log(`压缩图片 => 压缩失败: ${mfs.relative(mfs.dirname(mSrcDir), imageObj.srcPath)}`);
        } else {
            imageObj.dstSize = mfs.size(imageObj.dstPath);

            let ratio = 1 - imageObj.dstSize / imageObj.srcSize;
            if (ratio < 0.2) {
                // 压缩比例小于20%认为是重复压缩
                imageObj.dstSize = imageObj.srcSize;
                mfs.rm(imageObj.dstPath);
                repetCount++;
                utils.log(`压缩图片 => 重复压缩: ${mfs.relative(mfs.dirname(mSrcDir), imageObj.srcPath)}, 压缩比例: ${(ratio * 100).toFixed(2)}%`);
            }
        }

        srcSizeCount += imageObj.srcSize;
        dstSizeCount += imageObj.dstSize;
    }

    utils.log(`压缩图片 => 总数: ${totalCount}`);

    if (errorCount > 0) {
        utils.log(`压缩图片 => 失败数量: ${errorCount}`);
    }

    if (repetCount > 0) {
        utils.log(`压缩图片 => 重复数量: ${repetCount}`);
    }

    let before = srcSizeCount / 1024 / 1024;
    let after = dstSizeCount / 1024 / 1024;
    let ratio = 1 - dstSizeCount / srcSizeCount || 0;

    utils.log(`压缩图片 => 压缩前: ${before.toFixed(2)}MB, 压缩后: ${after.toFixed(2)}MB, 压缩比例: ${(ratio * 100).toFixed(2)}%, 减少: ${(before - after).toFixed(2)}MB`);

    if (errorCount === 0) {
        utils.log(`压缩图片 => 成功`);
    } else {
        utils.log(`压缩图片 => 失败`);
    }

    let endTime = new Date().getTime();
    utils.log(`压缩图片 => 结束, 耗时: ${utils.formatDuration(endTime - startTime)}`);

    if (typeof mCompleteCallback == 'function') {
        mCompleteCallback(errorCount);
    }
}

module.exports.compressDirImages = compressDirImages;
