const {send} = require("../helpers");

module.exports = {
    GET: {
        param: "id",
        handler: function(req, res, param){
            this.param = param;
            if(param){
                
                send(req, res, {says: `duck with id ${this.param}`, method: req.method});     
                return;   
            }
            send(req, res, {says: `quack`, method: req.method});        
            
        }
    },
    POST: {
        handler: function(req, res){
            send(req, res, {says: "quack", method: req.method});
        }
    }
}