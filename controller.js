const helpers = require("./helpers");

module.exports = function (req, res){
    const endpoint = new URL(req.url, "http://localhost:5000/").pathname;
    //Regex imellem /REGEX/
    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|png|js|jpe?g)$/
    let result = endpoint.match(regEx);
    console.log(result);

    if(result){        
        helpers.sendFileTest(req, res, "./static/" + result[0])
        return;
    }

    //console.log(endpoint);
    helpers.send(req, res, {message: `resource ${endpoint} not avail`});

    //helpers.send(req, res, {besked: "dwdawd"});
    /*
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write(" hellsdwdadossaddw wold");
    res.end(" Hedwwdwaadj");
    */
}

