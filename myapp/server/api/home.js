var db          = require('./../config/mysql.config').db;
var cred        = require('./../config/mysql.config').cred;
var http        = require('http');
var express     = require('express');
var MySQLEvents = require('mysql-events');
router          = express.Router();
var soc         = require('socket.io')
var server      = http.Server(express).listen(8000);
var io          = soc(server);





	var getAllReports = function (cb) {
		db.connect(function(err) {
				db.query("SELECT * FROM reports", function (err, result, fields) {
				    if (err) return;
				    cb(result);
				    return;
				});
		});
	}



	var mysqlEventWatcher = MySQLEvents(cred);

	io.on('connection', (socket) => {
			var watcher = mysqlEventWatcher.add(
			  'mydb.reports',
			  function (oldRow, newRow, event) {
			    //row inserted
			    if (oldRow === null) {
			       getAllReports(function(result){
			           socket.emit('reportlist', result);
			       });
			    }
			     //row deleted
			    if (newRow === null) {
			      
			    }
			 
			     //row updated
			    if (oldRow !== null && newRow !== null) {
			      
			    }
			  }
		);
	 })



	var allreports = function (req,res) {
		getAllReports(function(result){
			return res.status(200).send(result);
		});
	}

	var newreport = function (req,res) {
		var sql = "INSERT INTO reports (name) VALUES (?)";
		params = [req.body.reportname];
		db.query(sql, params, function (err, result) {
			console.log(err)
	    if (err) return;
	       return res.status(200).send({affectedRows:result.affectedRows});
	    });
	}

	router.get('/allreports',allreports);
    router.post('/newreport',newreport);


module.exports = router;


