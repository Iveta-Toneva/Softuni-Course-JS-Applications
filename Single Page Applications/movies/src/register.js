import { hideSections } from './app.js';
import { home } from './home.js';
const registerSection = document.querySelector('#form-sign-up');
let registerForm = document.querySelector('#register-form');

export function register() {

    let url = 'http://localhost:3030/jsonstore/users/register';
    hideSections();
    registerSection.style.display = 'block';

    registerForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {

        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('repeatPassword');

        if (!email) {
            alert('Invalid email!');
            return;
        }

        if (password < 6 || password !== rePassword) {
            alert('Invalid password!');
            return;
        }


        let user = { email, password };

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(userData => {
                localStorage.setItem('user', JSON.stringify(userData));
            });

        email = '';
        password = '';
        rePassword = '';

        home();

    }


}