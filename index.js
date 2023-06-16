// creating a server!
const http = require('http');
const fs = require('fs');
const Myserver = http.createServer((req, res) => {
  console.log('Server Running!');
  res.end('Hello Vivek!');
});
Myserver.listen(8000, (req, res) => {
  const log = `${Date.now()}: ${'hello'} New Req Received!`;
  fs.appendFile('logo.txt', log, (err, data) => {
    // res.end(log);
  });
  console.log(log);
});

// const math = require('./math');
// console.log('fun:', math.addFn(4, 5));
// console.log('fun:', math.subtractFn(4, 5));
// console.log('Hello Vivke!');
 