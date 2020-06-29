const glob = require('glob')


// block io
// var result = null;
// console.time('glob')
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob')

// console.log(result)

// non block io
var result = null;
console.time('glob')
glob(__dirname + '/**/*', function(res, err) {
    result = res
    console.log('got result!')
})
console.timeEnd('glob')
console.log(1 + 1)

