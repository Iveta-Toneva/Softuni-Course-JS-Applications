import { render, html } from './node_modules/lit-html/lit-html.js'

let form = document.querySelector('form');
let root = document.querySelector('#root');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let towns = formData.get('towns');
    towns = towns.split(', ');
    render(template(towns), root);
})


const template = (towns) => html`
   <ul>
    ${towns.map(x => html`<li>${x}</li>`)}
   </ul>
    `;


