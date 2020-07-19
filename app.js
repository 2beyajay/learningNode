const express = require('express');

const app = express();

// "use" is a function from express that takes another function as a parameter

app.use((req, res, next) => { //this is a middleware. part of the express.
	console.log('in the middleware!');
	next(); // sends the control to the next use() function. the server will be stopped here if no "next" function is used.
});

app.use((req, res, next) => {
	console.log('and another!');
	res.send('<h1>Hello Express</h1>');
});

app.listen(3000); // app can listen so we don't have to import the http