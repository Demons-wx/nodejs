function interview (callback) {
    setTimeout(() => {
        if (Math.random() > 0.8) {
            callback(null, "success")
        } else {
            callback(new Error('fail'))
        }
    }, 500)
}

// 回调的约定: 第一个参数默认为异常,如果没有异常, 第一个参数置空
interview(function(err, res) {
    if (err) {
        return console.log('cry')
    }
    console.log('smile')
})