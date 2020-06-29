
// callback 多轮面试, 产生 callback hell
(function() {
    interview(function (err) {
        if (err) {
            return console.log('cry for 1st round')
        }

        interview(function (err) {
            if (err) {
                return console.log('cry for 2nd round')
            }

            interview(function (err) {
                if (err) {
                    return console.log('cry for 3rd round')
                }

                console.log('smile')
            })
        })
    })
})();

function interview (callback) {
    setTimeout(() => {
        if (Math.random() > 0.8) {
            callback(null, "success")
        } else {
            callback(new Error('fail'))
        }
    }, 500)
}