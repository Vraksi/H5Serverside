const {send} = require("../helpers");

module.exports = {
    GET: {
        param: "id",
        handler: function(req, res, param){
                let parms = param !== ''? param.replace("/", "").split("/"): null;
                send(req, res, {says: `quack`, method: req.method, params: parms});     
                return;   
        }
    },
    POST: {
        handler: function(req, res){
            send(req, res, {says: "quack", method: req.method});
        }
    }
}