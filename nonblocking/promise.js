(function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            // resolve(3);
            reject(new Error(3));
        }, 300);
    }).then(res => {
        console.log(res);

    }).catch(err => {
        console.log(err);
    });

    console.log(promise);
    
    setTimeout(() => {
        console.log(promise)
    }, 800)
})();
