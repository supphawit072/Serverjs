var http = require("http");

var listeners = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h2 style="text-align: center;">Hello World</h2>');
}

var server = http.createServer(listeners);

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
