function attachEvents() {

    let loadButton = document.querySelector('#btnLoad');
    let ulPhoneBook = document.querySelector('#phonebook');
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let createButton = document.querySelector('#btnCreate');
    let personInput = document.querySelector('#person');
    let phoneInput = document.querySelector('#phone');

    loadButton.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(entry => {
                    let key = entry[0];
                    let li = document.createElement('li');
                    li.id = key;
                    li.textContent = `${entry[1].person}: ${entry[1].phone}`;
                    let deleButton = document.createElement('button');
                    deleButton.textContent = 'Delete';
                    li.appendChild(deleButton);
                    ulPhoneBook.appendChild(li);
                    deleButton.addEventListener('click', () => {
                        fetch(`${url}/${key}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                let li = document.getElementById(key);
                                li.remove();
                            });
                    });
                });
            });
    });

    createButton.addEventListener('click', () => {
        let person = { person: personInput.value, phone: phoneInput.value };
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(data => {
                personInput.value = '';
                phoneInput.value = '';  
                loadButton.click();
            });
    });

}

attachEvents();