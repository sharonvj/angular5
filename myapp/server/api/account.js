var elasticClient = require('./../config/elastic.config');
var queryBuilder = require('./../config/query.builder');
var express = require('express');
var request = require('request');
router = express.Router();


var isUserExist = function(req,res,next){
  var options = elasticClient.account('GET',"_search",);
    if(req.body.username && req.body.password) {
      options['body'] = JSON.stringify(queryBuilder.userExist(req.body.username));
      request(options, function (err, response) {
        try {
           response = JSON.parse(response.body);
           if(response.hits.total>0) {
             res.status(200).send({status:'exist'});
             return;
            }
            else {
             next();
            }
        }
        catch (err) {
          res.status(200).send({status:'error'});
        }
      });
    }
    else {
     res.status(200).send({status:'invalid'});
  }

}


var signup = function(req, res) {
    var options = elasticClient.account('POST');
    options.body = JSON.stringify({user:req.body.username,password:req.body.password});
    request(options, function (err, response) {
      try {
         response = JSON.parse(response.body);
         if(response._id) {
           res.status(200).send({status:'success'});
           return;
          }
          else {
           res.status(200).send({status:'failed'});
           return;
          }
      }
      catch (err) {
        res.status(200).send({status:'error'});
      }
    });
}

var signin = function(req, res) {
  var options =  elasticClient.account('GET','_search');
  options.body = JSON.stringify(queryBuilder.auth(req.body.username,req.body.password));
  request(options, function (err, response) {
       try{
          response = JSON.parse(response.body);
         if(response.hits.total>0) {
           res.status(200).send({status:'success'});
           return;
          }
          else {
           res.status(200).send({status:'failed'});
           return;
          }
       }
       catch(err){
        res.status(200).send({status:'error'});
       }
      res.status(200).send(response);
  });
}

router.post('/signup',isUserExist,signup);
router.post('/signin',signin);


module.exports = router;