import {createServer} from "node:http";
import fs from "fs"

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync('./index.html');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    } else if (['/about', '/contact-me'].includes(req.url)) {
        const html = fs.readFileSync(`.${req.url}.html`)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    } else {
        res.statusCode = 404;
        const html = fs.readFileSync(`./404.html`)
        res.end(html);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});