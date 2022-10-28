const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {

    if (req.url === '/'){
        let filePath = path.join(__dirname,'index.html');
        fs.readFile(filePath,'utf8', (err,data) =>{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(data);
        });
    }

    if (req.url === '/about'){
        let filePath = path.join(__dirname,'about.html');
        fs.readFile(filePath,'utf8', (err,data) =>{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(data);
        });
    }

    if (req.url === '/contact'){
        let filePath = path.join(__dirname,'contact.html');
        fs.readFile(filePath,'utf8', (err,data) =>{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
});

server.listen(4000,'127.0.0.1');
console.log('server created');