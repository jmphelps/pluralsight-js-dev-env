var express = require('express');
var path = require('path');
var open = require('open');
var _dirname = "D:/Development/pluralsight-js-dev-env/";


/*eslint-disable no-console */
var port = 3000;
var app = express();



app.get('/', function(req, res){
    res.sendFile(path.join(_dirname, 'src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
