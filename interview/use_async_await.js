/**
 * async function 是Promise的语法糖
 * 
 * - await 关键字可以暂停 async function 的执行
 * - await 关键字可以同步的写法获取 Promise 的执行结果
 * - try-catch 可以获取 await 所得到的错误
 * 
 * 一个穿越事件循环存在的function
 */


// async-await 模拟多轮面试
(async function () {
    try {
        await interview(1)
        await interview(2)
        await interview(3)
    } catch (e) {
        return console.log('cry at round ' + e.round)
    }
    
    console.log('smile')
})();

// async-await 模拟同时面试多家公司
(async function () {
    try {
        await Promise.all([
            interview('tencent'),
            interview('geekbanng')
        ])
    } catch (e) {
        return console.log('cry for ' + e.round)
    }

    console.log('smile')
})()

function interview (round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('success');
            } else {
                var error = new Error('fail');
                error.round = round;
                reject(error);
            }
        }, 500)
    })
}