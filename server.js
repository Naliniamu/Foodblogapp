var express = require('express')
var cors = require('cors');
var dbconnect = require("./connection.js");

const bodyParser = require('body-parser');
var app = express();
app.use(express.json())
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const port = 8080

app.get('/fetchmessagecontents', (req, res) => {
  dbconnect.fetchmessagecontents(req, res)
})

app.post('/insertmessagecontents', (req, res) => {
   dbconnect.insertmessagecontents(req.body,res)
})
app.post('/insertmessagecomments', (req, res) => {
   dbconnect.insertmessagecomments(req.body,res)
})

app.listen(port, () => {
  console.log("server connected")
})