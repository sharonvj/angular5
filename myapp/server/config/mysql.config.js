var mysql = require('mysql');
var cred = {
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "mydb"
}
var db = mysql.createConnection(cred);
module.exports = {db:db,cred:cred};