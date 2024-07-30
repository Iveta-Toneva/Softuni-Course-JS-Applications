import { render, html } from './node_modules/lit-html/lit-html.js';
const menuElement = document.querySelector('#menu');
const inputElement = document.querySelector('#itemText');
const button = document.querySelector('input[type=submit]');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

function getData() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let arrayData = Object.values(data);
            render(template(arrayData), menuElement);
        })
    inputElement.value = '';
}

getData();

const template = (data) => html`
${data.map(el => html`<option value=${el._id}>${el.text}</opiton>`)}
`
button.addEventListener('click', (e) => {

    if (!inputElement.value) {
        return;
    }

    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ text: inputElement.value })
    })
        .then(res => res.json())
        .then(data => getData());

});

