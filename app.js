const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html'); //telling the client what kind of response we are sending to it
    
    res.write('<html><body>hello world</body>') //the html response we send back to the client(browser)

    res.end(); //ending the response. the client will stop loading

});

server.listen(3000); // keep listening for requests on port 3000
