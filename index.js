//WHOA WHOA WHOA STOP THE CLOCK AND VAR THESE OUT
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var nextId = 1;
var clients = {};

//BENJI'S FUCKING LATE AGAIN OH WELL...  
//SO START UP THIS CHAT

//SET UP ECHO SERVER AT /CHAT DIRECTORY 
app.ws('/chat', function(ws, req){
	var clientId = nextId;
	clients[clientId] = {ws: ws};
	nextId++;
	ws.on('message', function(msgString){
		var inMsg = JSON.parse(msgString); //parse incoming strings
		var outMsg = JSON.stringify({
			//GRAB THAT JSON STUFFS!!
			clientId: clientId,
			message: inMsg.message
			}); // var outMsg strings outgoing data for sending
		


		Object.keys(clients).forEach(function(clientId){
			clients[clientId].ws.send(outMsg); 
		}); 
			//this peeps the clients we have and for each one
			//send on thier websocket and everyone gets messages
	});
});

//SERVE STATICS DUUUUUUUUUUUUUUUUUUDE
app.use(express.static('public'));

//POST THE SERVER IS GOO FOR YOU
app.listen(3000, function () {
  console.log('HEYNOW! We are listening on port 3000!');
});