
const controller = require("./controller")
const http = require("http");

http.createServer(controller).listen(5000);
