const http = require('http');
const fs = require('fs');

http.createServer(function (req, resp) {

    if (req.url == '/favicon.ico') {
        resp.writeHead(200);
        resp.end();
        return;
    }

    resp.writeHead(200);
    fs.createReadStream(__dirname + '/index.html').pipe(resp);

}).listen(3000);

// npm install -g httpserver 可以在本地 当前目录 开启一个http服务，共享当前目录的文件