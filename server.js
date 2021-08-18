const controller = require("./controller")
const http = require("http");


http.createServer(controller).listen(5000, function(){
    console.log("server started at http://localhost:5000/");
});
