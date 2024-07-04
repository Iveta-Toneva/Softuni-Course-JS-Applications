function lockedProfile() {

    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let count = 0;
    let main = document.querySelector('#main');
    let first = document.querySelector('.profile');
    first.remove();

    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(person => {
                count++;
                let mainDiv = document.createElement('div');
                mainDiv.classList.add('profile');
                let img = document.createElement('img');
                img.src = './iconProfile2.png';
                img.classList.add('userIcon');
                let lockLabel = document.createElement('label');
                lockLabel.textContent = 'Lock';
                let inputLock = document.createElement('input');
                inputLock.type = 'radio';
                inputLock.name = `user${count}Locked`;
                inputLock.value = 'lock';
                inputLock.checked = true;
                let unlockLabel = document.createElement('label');
                unlockLabel.textContent = 'unlock';
                let inputUnlock = document.createElement('input');
                inputUnlock.type = 'radio';
                inputUnlock.name = `user${count}Locked`;
                inputUnlock.value = 'unlock';
                let br = document.createElement('br');
                inputUnlock.appendChild(br);
                let hr0 = document.createElement('hr');
                let userNameLabel = document.createElement('label');
                userNameLabel.textContent = 'Username';
                let inputUsername = document.createElement('input');
                inputUsername.type = 'text';
                inputUsername.name = `user${count}Username`;
                inputUsername.value = person.username;
                inputUsername.setAttribute('disabled', 'readonly');

                let hiddenDiv = document.createElement('div');
                hiddenDiv.id = `user${count}HiddenFields`;
                hiddenDiv.style.display = 'none';
                let hr = document.createElement('hr');
                let labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email:';
                let inputEmail = document.createElement('input');
                inputEmail.setAttribute('disabled', 'readonly');
                inputEmail.type = 'email';
                inputEmail.name = `user${count}Email`;
                inputEmail.value = person.email;
                let ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';
                let ageInput = document.createElement('input');
                ageInput.type = 'email';
                ageInput.setAttribute('disabled', 'readonly');
                ageInput.name = 'user${count}Age';
                ageInput.value = person.age;
                let button = document.createElement('button');
                button.textContent = 'Show more';
                hiddenDiv.appendChild(hr);
                hiddenDiv.appendChild(labelEmail);
                hiddenDiv.appendChild(inputEmail);
                hiddenDiv.appendChild(ageLabel);
                hiddenDiv.appendChild(ageInput);
                mainDiv.appendChild(img);
                mainDiv.appendChild(lockLabel);
                mainDiv.appendChild(inputLock);
                mainDiv.appendChild(unlockLabel);
                mainDiv.appendChild(inputUnlock);
                mainDiv.appendChild(hr0);
                mainDiv.appendChild(userNameLabel);
                mainDiv.appendChild(inputUsername);
                mainDiv.appendChild(hiddenDiv);
                mainDiv.appendChild(button);
                main.appendChild(mainDiv);

                button.addEventListener('click', () => {

                    if (inputUnlock.checked) {
                        if (button.textContent === 'Show more') {
                            button.textContent = 'Hide it';
                            hiddenDiv.style.display = 'block';
                        } else {
                            button.textContent = 'Show more';
                            hiddenDiv.style.display = 'none';
                        }

                    }

                });

            });
        });
}