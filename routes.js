const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write(
            '<html><body><form action="/message" method="POST"><input type="text" name="message"></input><button>Send</button></form></body>'
        );
        return res.end();
    }

    // on clicking the submit button, the user will be redirected to /message due to the action of the form.
    // not we have to control what happens when they get to /message

    if (url === "/message" && method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); //data comes from POST in chunks. so we're collecting it all in body

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); // converting array to string
            const message = parseBody.split('=')[1]; // the data comes in key = value pair. taking out the key and saving the value 
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, {
                    location: '/'
                }) //302 = response code for redirect. then location is to declare where you want it to redirect
                console.log("ended");
                return res.end();
            });
        });

    }


    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>hello world</body>");
    res.end();
}

// module.exports = requestHandler; // export 1 thing

// module.exports = {
//     handler: requestHandler,
//     someText: "some hard coded text"
// }; //export multiple things as an object

exports.handler = requestHandler;
exports.someText = "some hard coded text";
// this is a shortcut. get rid of "module" and node will understand