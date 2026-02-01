// import {createServer} from "node:http";
// import fs from "fs"

// const hostname = 'localhost';
// const port = 8080;

// const server = createServer((req, res) => {
//     if (req.url === '/') {
//         const html = fs.readFileSync('./index.html');
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(html);
//     } else if (['/about', '/contact-me'].includes(req.url)) {
//         const html = fs.readFileSync(`.${req.url}.html`)
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(html);
//     } else {
//         res.statusCode = 404;
//         const html = fs.readFileSync(`./404.html`)
//         res.end(html);
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
const fs = require('fs');
const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 8080;
const htmlIndex = fs.readFileSync('./index.html', 'utf-8');
const htmlAbout = fs.readFileSync('./about.html', 'utf-8');
const htmlContact = fs.readFileSync('./contact-me.html', 'utf-8');
const html404 = fs.readFileSync('./404.html', 'utf-8');

app.get('/', (req, res) => {
    res.status(200)
        .setHeader('Content-Type', 'text/html')
        .send(htmlIndex);
})

app.get('/about', (req, res) => {
    res.status(200)
        .setHeader('Content-Type', 'text/html')
        .send(htmlAbout);
})

app.get('/contact-me', (req, res) => {
    res.status(200)
        .setHeader('Content-Type', 'text/html')
        .send(htmlContact);
})

app.use((req, res) => {
    res.status(404)
        .setHeader('Content-Type', 'text/html')
        .send(html404);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})