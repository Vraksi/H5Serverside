const sql = require('mssql')
const {send} = require('../helpers')
const database = require('../data/database');
const { request } = require('http');
const { buffer } = require('rxjs');

module.exports = {
    GET: {
        param: "id",
        handler: async function(req, res, param){
                let params = param !== ''? param.replace("/", "").split("/"): null;
                let string = ""
                if(params == null){
                    database.ConnectGet().then(s => {
                        //console.log(s);                    
                        string = JSON.parse(s)
                        //console.log(string);
                        
                        send(req, res, {says: string, method: req.method, param: params});     
                        return;   
                    });
                }
                else{
                    database.ConnectGetId(params).then(s => {
                        //console.log(s);                    
                        string = JSON.parse(s)
                        //console.log(string);
                        
                        send(req, res, {says: string, method: req.method, param: params});     
                        return;   
                    });
                }
               
                
        }
    },
    POST:{
        paramBody: "body",
        handler: async function (req, res, paramBody) {  
            let body = []
            req.on(
                'data', (chunk) => {
                    body.push(chunk);
                }).on('end', () =>
                body = Buffer.concat(body).toString());
            
            console.log(body)
            let params = paramBody !== ''? paramBody.replace("/", "").split("/"): null;
            if(params == null)
            {
                return
            }
            console.log(params)
            database.ConnectPost(params[0],params[1],params[2],params[3]).then(s => {               
                send(req, res, {says: "Posted with " + params[0], method: req.method});     
                return;   
            });
        }
    },
    PUT:{

    },
    DELETE:{

    }

}