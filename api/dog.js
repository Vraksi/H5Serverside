const sql = require('mssql')
const {send, getRequestData} = require('../helpers')
const database = require('../data/database');
const { request } = require('http');
const { buffer } = require('rxjs');

let Hund = {
    Id: 0,
    Navn: "",
    Ejer: "",
    Art: "",
    EjerTlf: 123
}

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
        handler: async function (req, res, paramBody) {              
            getRequestData(req).then(inc => {
                database.ConnectPost(inc)
                send(req, res, inc)  
            })
            .catch(err => {
                console.log("error " + err);
                send(req, res, err, 500)
            })
            //let params = paramBody !== ''? paramBody.replace("/", "").split("/"): null;
            
        }
    },
    PUT:{
        handler: async function (req, res, paramBody) {              
            getRequestData(req).then(inc => {
                database.ConnectPut(inc)
                send(req, res, inc)  
            })
            .catch(err => {
                console.log("error " + err);
                send(req, res, err, 500)
            })
            //let params = paramBody !== ''? paramBody.replace("/", "").split("/"): null;
            
        }

    },
    DELETE:{
        param: "id",
        handler: async function(req, res, param){
                let params = param !== ''? param.replace("/", "").split("/"): null;                
                database.ConnectDelete(params).then(s => {
                    send(req, res, {navn: "id"}, 200)
                    return;   
                });
                
        }
    }

}