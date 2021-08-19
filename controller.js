const helpers = require("./helpers");
const logger = require("./logger");
const api = {}

api["/api/duck"] = require("./api/duck")
api["/api/cat"] = require("./api/cat")
api["/api/dog"] = require("./api/dog")

module.exports = function (req, res){
    logger(req, res);
    const endpoint = new URL(req.url, "http://localhost:5000/").pathname;
    const regEx = /^\/((css|img|js)\/)?[\w-]+\.(html|css|png|js|jpe?g)$/
    let result = endpoint.match(regEx);

    if(result){
        helpers.streamfile(req, res, "./static/" + result[0]);
        return;
    }

    //hvis jeg er her så er der ikke et match ovenover
    //const apiRX = /(^\/api\/\w+)((\/\w+)*?)$/
    const apiRX = /^(?<route>\/api\/\w+)(?<params>(\/\w+)*)$/
    result = endpoint.match(apiRX);
    console.log(result);
    if(result){
        if(api[result.groups.route]){
            if(api[result.groups.route][req.method]){
                api[result[1]][req.method].handler(req, res, result[2]);    
                return;
            }
            helpers.send(req, res, {msg: "metode ikke tilladt her"}, 405);
            return
        }
    } 
    helpers.send(req, res, {message: `resource ${endpoint} not avail`});
}

