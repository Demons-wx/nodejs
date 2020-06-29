exports.hello = 'world'

exports.add = function (a, b) {
    return a + b
}

exports.geekbang = {
    geek: 'bang'
}

setTimeout(() => {
    console.log(exports)
}, 2000)