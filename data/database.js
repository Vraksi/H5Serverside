const sql = require('mssql');
const rxjs = require('rxjs')

const sqlConfig = {
    user: 'sa',
    password: '1234',
    database: "Dyr",
    server: 'DESKTOP-POGFN2F',

    options: {
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

exports.ConnectGet = async function(){
    try {
        await sql.connect(sqlConfig);
        let string = ""
        await sql.query`SELECT * FROM Hunde`.then( 
            res =>{ 
            //console.log("RESULT " + JSON.stringify(res))
            string = JSON.stringify(res.recordset)
            //return test;
        })
        //console.log(string);
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectGetId = async function(id){
    try {
        await sql.connect(sqlConfig);
        let string = ""
        await sql.query`SELECT * FROM Hunde WHERE Id = ${id}`.then( 
            res =>{ 
            //console.log("RESULT " + JSON.stringify(res))
            string = JSON.stringify(res.recordset)
            //return test;
        })
        //console.log(string);
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectPost = async function(navn, ejer, art, ejerTlf){
    try {
        console.log(`${navn} ${ejer} ${art} ${ejerTlf}`);
        await sql.connect(sqlConfig);
        await sql.query`INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('${navn}', '${ejer}', '${art}', ${ejerTlf})`.then( 
            res =>{ 
            console.log(`${navn} ${ejer} ${art} ${ejerTlf}`);
        })
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}
exports.ConnectPut = async function(){
    try {
        await sql.connect(sqlConfig);
        let string = ""
        await sql.query`SELECT * FROM Hunde`.then( 
            res =>{ 
            //console.log("RESULT " + JSON.stringify(res))
            string = JSON.stringify(res.recordset)
            //return test;
        })
        //console.log(string);
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectDelete = async function(){
    try {
        await sql.connect(sqlConfig);
        let string = ""
        await sql.query`SELECT * FROM Hunde`.then( 
            res =>{ 
            //console.log("RESULT " + JSON.stringify(res))
            string = JSON.stringify(res.recordset)
            //return test;
        })
        //console.log(string);
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}
/*

*/
//TODO GET, GET ID, POST, DELETE