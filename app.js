const http = require("http");
const routes = require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler); //exported object {routes} from the other file

server.listen(3000); 