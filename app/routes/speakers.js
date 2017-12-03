var express= require('express');
var router = express.Router();
var dataFile = require('../data/dataFile.json');

router.get('/speakers',function(request,response){

   /* var info = '';
    dataFile.speakers.forEach(function(item){
        info +=`    
            <ul>
                <h2>${item.Name} </h2>
                    <img src="/images/${item.shortname}.jpg">
                <p>${item.Description} </p>
            </ul>
             `;
    
    });
    response.send(`${info}`);*/
});


router.get('/speakers/:speakerId',function(request,response){
    /*
    
   var speaker = dataFile.speakers[request.params.speakerId]
    response.send(`
                <h2>${speaker.Name} </h2>
                <img src="/images/${speaker.shortname}.jpg">
                <p>${speaker.Description} </p>
                `);*/
});

module.exports = router;
