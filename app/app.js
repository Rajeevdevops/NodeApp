var express= require('express');
var port = 3400;
var app = express();
var dataFile = require('./data/dataFile.json');
var path = require('path');


app.set('view engine','ejs');
app.set('views','app/views');

//p.use('/static', express.static(path.join(__dirname, 'public')))
//p.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
console.log(__dirname);



var server = app.listen(port,function(request,response){
   console.log(`Server running on Port : ${port}`)
});
