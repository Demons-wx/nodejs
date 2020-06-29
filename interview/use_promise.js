// 使用promise模拟多轮面试，可以避免callback hell
(function () {
    var promise = interview(1)
    .then(() => {
        return interview(2)
    })
    .then(() => {
        return interview(3)
    })
    .then(() => {
        console.log('smile')
    })
    .catch((err) => {
        console.log('cry at round ' + err.round)
    })

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
})();



// 使用promise模拟同时面试多家公司
(function () {
    Promise.all([
        interview('tencent'),
        interview('geekbang')
    ])
    .then(() => {
        console.log('smile')
    })
    // 注意: 这里cache只会获取第一个触发reject的错误信息
    .catch((err) => {
        console.log('cry for ' + err)
    })
    
    function interview (name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('success');
                } else {
                    reject(name);
                }
            }, 500)
        }) 
    }
})();
