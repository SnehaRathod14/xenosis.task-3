document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const messageInput = document.getElementById('message');
    const messagesContainer = document.querySelector('.messages');

    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.classList.add('message');
        messagesContainer.appendChild(messageElement);

        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
