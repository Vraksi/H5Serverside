module.exports = function (req, res){
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write("hello world");
    res.end("Hej");
}

