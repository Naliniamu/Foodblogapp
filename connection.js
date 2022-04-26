const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "261992",
    database: "crystal",
    port: 3306

})
var dbconnect = {
    fetchmessagecontents: function (req, res) {
        con.connect(function (err) {
            var sql = `call sp_fetchmessagecontents()`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.send(result)
            })
        })
    },
    fetchmessagecomments: function (req, res) {
        con.connect(function (err) {
 var sql = `call sp_fetchmessagecomments(?)`;
            con.query(sql, req.msgid, function (err, result) {
                if (err) throw err;
                res.send(result[0])
            })
        })
    },
    insertmessagecontents: function (req, res) {
        con.connect(function (err) {
            var sql = `call sp_insertmessagecontents(?)`;
            con.query(sql, req.msg, function (err, result) {
                if (err) throw err;
                res.send(result[0])
            })
        })
    },
    insertmessagecomments: function (req, res) {
        con.connect(function (err) {
            var sql = `call sp_insertmessagecomments(?,?)`;
            con.query(sql, [req.msg, req.msgid], function (err, result) {
                if (err) throw err;
                res.send(result[0])
            })
        })
    },
}

module.exports = dbconnect;
