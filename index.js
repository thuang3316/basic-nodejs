const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/:name', (req, res, next) => {
  const fileName = req.params.name + '.html';
  res.sendFile(fileName, { root: __dirname }, (err) => {
    if (err) {
      next('route')
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: __dirname });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})