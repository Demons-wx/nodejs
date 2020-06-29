var lib = require('./lib.js')
console.log(lib)

// 从外面可以改变被引入的对象lib所导出的内容
lib.additional = 'test'