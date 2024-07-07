function attachEvents() {

    let textArea = document.querySelector('#messages');
    let nameElement = document.querySelector('input[name=author]');
    let messageElement = document.querySelector('input[name=content]');
    let submitButton = document.querySelector('#submit');
    let refreshButton = document.querySelector('#refresh');
    let url = 'http://localhost:3030/jsonstore/messenger';


    submitButton.addEventListener('click', () => {

        let message = { author: nameElement.value, content: messageElement.value };

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                nameElement.value = '';
                messageElement.value = '';
            });

    });

    refreshButton.addEventListener('click', () => {
        let arrayMessages = [];
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(message => {
                    arrayMessages.push(`${message.author}: ${message.content}`);
                });
                textArea.textContent = arrayMessages.join('\n');
            });
    });

}

attachEvents();