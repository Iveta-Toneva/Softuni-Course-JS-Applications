import { towns } from './towns.js'
import { render, html } from './node_modules/lit-html/lit-html.js'

let townsDiv = document.querySelector('#towns');
let resultDiv = document.querySelector('#result');
let input = document.querySelector('#searchText');
let button = document.querySelector('button');

const mainTemplate = (towns => html`<ul>${towns.map(town => html`<li>${town}</li>`)}</ul>
`);

const templateEvent = (towns) => html`
  <ul>${towns.map(town => html`<li class= ${town.includes(input.value) ? "active" : ""}>${town}</li>`)}</ul>
`

render(mainTemplate(towns), townsDiv);

button.addEventListener('click', () => {

    if (!input.value) {
        return;
    }

    render(templateEvent(towns), townsDiv);

    let count = towns.filter(town => town.includes(input.value)).length;

    resultDiv.textContent = `${count} matches found`;


});













