function sleep(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

const http = require('http');
const hostname = '127.0.0.1'
const port = 3000;
const server = http.createServer((req, res) => {
    sleep(50000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});