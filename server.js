var http = require('http'),
    url = require('url'),
    path = require('path'),
    hostname = '127.0.0.1',
    port = 3000,
    fs = require('fs'),
    ext,
    pathname;

var server = http.createServer((req, res) => {
    pathname = url.parse(req.url).pathname;
    ext = path.extname(pathname);

    if(ext) {
        if (ext === '.css') {
            res.writeHead(200, {'Content-Type': 'text/css'});
        } else if (ext === '.js') {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
        }

        res.write(fs.readFileSync(__dirname + pathname, 'utf8'));
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync('./index.html', 'utf8'));
    }

    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server Created on http://${hostname}:${port}/`);
});

