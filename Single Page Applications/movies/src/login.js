import { hideSections } from './app.js';
import { home } from './home.js';
const loginSection = document.querySelector('#form-login');
const loginForm = loginSection.querySelector('form');
export function login() {

    hideSections();
    loginSection.style.display = 'block';
    loginForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {

        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let url = 'http://localhost:3030/users/login';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(userData => {
                localStorage.setItem('user', JSON.stringify(userData));
            });

        home();


    }

}