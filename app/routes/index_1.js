var express= require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//let mdb;
var url = 'mongodb://localhost:27017/rajeev';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  //  mdb=db;
  console.log("Connected correctly to server.");

});

router.get('/',function(request,response){    
 
/*let documents={};  
mdb.collection('jobdata').find({})
    .each(function(err,document) {
          assert.equal(null,err);
       
    if(!document){
           response.send('index');
           return;
       }
        documents[document.id] = document;
    });   
    
     */

           response.send('index.ejs');
});


module.exports = router;
