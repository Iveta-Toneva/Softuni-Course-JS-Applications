import { cats } from './catSeeder.js'
import { render, html } from './node_modules/lit-html/lit-html.js'


let section = document.querySelector('#allCats');

const template = (cats) => html`
   <ul>
    ${cats.map(cat => html`<li>
     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
     <div class="info">
    <button class="showBtn" data =${cat.id} @click=${onClickHandler}>Show status code</button>
    <div class="status" style="display: none" id=${cat.id}>
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
    </div>
   </div>
    </li>`)}
   </ul>
`;

render(template(cats), section);

function onClickHandler(e) {

    let li = e.target.parentElement.parentElement;
    let div = li.querySelector('.status');

    if (e.target.textContent === 'Show status code') {
        div.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        div.style.display = 'none';
        e.target.textContent = 'Show status code';
    }


}