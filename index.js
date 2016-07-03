
//VAR CITY
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

//DO ALL THE THINGS

//SET UP ECHO SERVER AT /CHAT
app.ws('/chat', function(ws, req){
	ws.on('message', function(msg){
		ws.send(msg);
	});
});

//SERVE STATIC FILES
app.use(express.static('public'));





//ERROR CHECKING
app.listen(3000, function () {
  console.log('HEYNOW! We are listening on port 3000!');
});