const {send} = require("../helpers");

module.exports = {
    GET: {
        handler: function(req, res){
            send(req, res, {says: "miav", method: req.method});
        }
    },
    POST: {
        handler: function(req, res){
            send(req, res, {says: "miavwwwwwww", method: req.method});
        }
    }
}