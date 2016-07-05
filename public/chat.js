//OPEN SOCKET
var ws = new WebSocket("ws://localhost:3000/chat");

//START CHAT CLIENT
ws.onopen = function(event){
	initializeChatClient();
};

//CHAT JS STUFF

function initializeChatClient() {
	var chatbox = document.getElementById('chatbox');
	var messageInput = chatbox.querySelector('.messageInput');
	var sendButton = chatbox.querySelector('.send');
	var messages = document.getElementById('messages');

ws.onmessage = function(event){
	var node = document.createElement('p'); 
	var msg = JSON.parse(event.data);
	node.innerText = msg.clientId + ": " + msg.message;
	messages.appendChild(node);
}

sendButton.addEventListener('click', function(){
	var message = messageInput.value;
	if (!message) {
		alert('You gotta say something fool!');
		return;
	}

	ws.send(JSON.stringify({message: message}));
	messageInput.value = "";
});
}

//TODO: CSS THE CHAT
//TODO: PUT ONLINE
//TODO: Lessen Deps?


