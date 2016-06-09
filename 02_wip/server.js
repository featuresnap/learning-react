var express = require('express');
console.log('starting server');

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express server is up on port 3000');
});