import { render, html } from './node_modules/lit-html/lit-html.js';

const button = document.querySelector('#searchBtn');
const input = document.querySelector('#searchField');
const url = 'http://localhost:3030/jsonstore/advanced/table';
const table = document.querySelector('table tbody');

function getData(template) {
   fetch(url)
      .then(res => res.json())
      .then(data => {
         render(template(Object.values(data)), table);
      })
}
const mainTemplate = (studentArr) => html`
${studentArr.map(student => {
   return html`
  <tr>
     <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
  </tr>`
})}
`
getData(mainTemplate);


const searchTemplate = (studentArr) => html`
 ${studentArr.map(student => {
   return html`
   <tr class=${student.firstName.toLowerCase().includes(input.value.toLowerCase()) || student.lastName.toLowerCase().includes(input.value.toLowerCase()) || student.email.includes(input.value) || student.course.toLowerCase().includes(input.value.toLowerCase()) ? "select" : ""}>
      <td>${student.firstName} ${student.lastName}</td>
       <td>${student.email}</td>
       <td>${student.course}</td>
   </tr>`
})}
`

button.addEventListener('click', () => {
   getData(searchTemplate);
})









