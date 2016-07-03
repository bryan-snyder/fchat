//OPEN SOCKET
var ws = new WebSocket("ws://localhost:3000/chat");

//START CHAT CLIENT
ws.onopen = function(event){
	initializeChatClient();
};

//CHAT JS STUFF

function initializeChatClient() {
	var chatBox = document.getElementById('chatbox');
	var messageInput = chatbox.querySelector('.messageInput');
	var sendButton = chatbox.querySelector('.send');
	var messages = document.getElementById('messages');

ws.onmessage = function(event){
	var node = document.createElement('p'); 
	node.innerText = event.data;
	messages.appendChild(node);
}

sendButton.addEventListener('click', function(){
	var message = messageInput.value;
	if (!message) {
		alert('You gotta say something fool!');
		return;
	}
	ws.send(message);
	messageInput.value = "";
});
}

