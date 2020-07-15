const http = require('http');

const server = http.createServer((req, res) => {
    // this is a callback function executed after a request reaches the server.
    console.log(req);
    
    process.exit(); // stop the exit. hard exit. do this when you want. don't use loosely

});

server.listen(3000); // keep listening for requests on port 3000
