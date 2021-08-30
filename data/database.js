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
        await sql.query(`SELECT * FROM Hunde`).then( 
            res =>{ 
            string = JSON.stringify(res.recordset)
        })
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectGetId = async function(id){
    try {
        await sql.connect(sqlConfig);
        let string = ""
        await sql.query(`SELECT * FROM Hunde WHERE Id = ${id}`).then( 
            res =>{ 
            string = JSON.stringify(res.recordset)
        })
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectPost = async function(Hund){
    try {
        console.log(`${Hund.Navn}', '${Hund.Ejer}', '${Hund.Art}', ${Hund.EjerTlf}`);
        await sql.connect(sqlConfig);
        await sql.query(`INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('${Hund.Navn}', '${Hund.Ejer}', '${Hund.Art}', ${Hund.EjerTlf})`)
        .then( 
            res =>{                 
            console.log(`${Hund.Navn}', '${Hund.Ejer}', '${Hund.Art}', ${Hund.EjerTlf}`);
            console.log("Posted");
        })
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}
exports.ConnectPut = async function(Hund){
    try {
        console.log("UPDATE");
        console.log(`${Hund.Navn}', '${Hund.Ejer}', '${Hund.Art}', ${Hund.EjerTlf}, ${Hund.Id}`);
        await sql.connect(sqlConfig);
        await sql.query(`UPDATE Hunde SET Navn = '${Hund.Navn}', Ejer = '${Hund.Ejer}', Art = '${Hund.Art}', EjerTlf = ${Hund.EjerTlf} WHERE Id = ${Hund.Id}`).then( 
            res =>{ 
                console.log("Updated ID " + Hund.Id);
        })
        return string
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}

exports.ConnectDelete = async function(id){
    try {
        await sql.connect(sqlConfig);
        await sql.query(`DELETE FROM Hunde WHERE Id = ${id}`).then( 
            res =>{ 
                console.log(`Deleted id ${id} from database`);
        })
    } catch (err) {
        console.log("error = " + err);   // ... error checks
    }
}