const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
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
		fs.writeFileSync('message.txt', 'DUMMY TEXT') // creating a file when the method is post and the url is /message

		res.writeHead(302, {location: '/'}) //302 = response code for redirect. then location is to declare where you want it to redirect
		return res.end();
	}


	res.setHeader("Content-Type", "text/html");
	res.write("<html><body>hello world</body>");
	res.end();
});

server.listen(3000); 