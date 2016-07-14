/* @flow */

//SET VARS
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var nextId = 1;
var clients = {};

//SET UP ECHO SERVER AT /CHAT
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
			clients[clientId].ws.send(outMsg, function (error){
				if (error !== undefined) {
					console.warn('error', error);
				}
			});
		});
			//this peeps the clients we have and for each one
			//send on thier websocket and everyone gets messages
			ws.on('close', function close() {
			  delete clients[clientId];
		});
	});
});






//SERVE STATICS DUUUUUUUUUUUUUUUUUUDE
app.use(express.static('public'));

//POST THE SERVER IS GOO FOR YOU
app.listen(3000, function () {
  console.log('HEYNOW! We are listening on port 3000!');
});
