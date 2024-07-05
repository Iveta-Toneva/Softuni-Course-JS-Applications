window.onload = solution;

function solution() {

    let mainSection = document.getElementById('main');
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(element => {
                let divAccordion = document.createElement('div');
                divAccordion.classList.add('accordion');
                let divHead = document.createElement('div');
                divHead.classList.add('head');
                let span = document.createElement('span');
                span.textContent = element.title;
                let button = document.createElement('button');
                button.classList.add('button');
                button.id = element._id;
                button.textContent = 'More';
                let divExtra = document.createElement('div');
                divExtra.classList.add('extra');
                let p = document.createElement('p');
                divHead.appendChild(span);
                divHead.appendChild(button);
                divAccordion.appendChild(divHead);
                divExtra.appendChild(p);
                divExtra.style.display = 'hidden';
                divAccordion.appendChild(divExtra);
                mainSection.appendChild(divAccordion);

                button.addEventListener('click', (e) => {
                    let currentUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${e.currentTarget.id}`;
                    fetch(currentUrl)
                        .then(res => res.json())
                        .then(data => {
                            p.textContent = data.content;
                        });

                    if (button.textContent === 'More') {
                        button.textContent = 'Less';
                        divExtra.style.display = 'block';
                    } else if (button.textContent === 'Less') {
                        button.textContent = 'More';
                        divExtra.style.display = 'none';
                    }
                });
            });
        });
}