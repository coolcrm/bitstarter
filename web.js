var express = require('express');

require('buffer');
var fs = require('fs');
buf = new Buffer(300);
buf = fs.readFileSync('index.html');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2s!');
response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});