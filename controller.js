const helpers = require("./helpers");
const logger = require("./logger");
const api = {}

api["/api/duck"] = require("./api/duck")
//api["/api/duck/id"] = require("./api/duck")
api["/api/cat"] = require("./api/cat")

module.exports = function (req, res){
    logger(req, res);
    const endpoint = new URL(req.url, "http://localhost:5000/").pathname;
    //Regex imellem /REGEX/
    const regEx = /^\/((css|img|js)\/)?[\w-]+\.(html|css|png|js|jpe?g)$/
    let result = endpoint.match(regEx);
    //console.log(result);

    if(result){
        //helpers.sendFileTest(req, res, "./static/" + result[0])
        helpers.streamfile(req, res, "./static/" + result[0]);
        return;
    }

    //hvis jeg er her så er der ikke et match ovenover
    const apiRX = /(^\/api\/\w+)(\/\w+)?$/
    result = endpoint.match(apiRX);
    console.log(result);
    if(result){
        if(api[result[1]]){
            if(api[result[1]][req.method]){
                if(result[2]){
                    api[result[1]][req.method].handler(req, res, result[2]);    
                    return;    
                }      
                
                api[result[1]][req.method].handler(req, res);
                return;
            }
            helpers.send(req, res, {msg: "metode ikke tilladt her"}, 405);
            return
        }
    } 
    helpers.send(req, res, {message: `resource ${endpoint} not avail`});
}

