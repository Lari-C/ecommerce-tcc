import Request from "../classes/request.js";

const form = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');


form.addEventListener('submit', e => {
    e.preventDefault();
    loginBtn.disabled = true;
    const formData = new FormData(form);
    const formJson = {
        email: formData.get('email'),
        senha: formData.get('senha')
    };
    new Request('/login', (res)=>{
        res.json().then(login => {
            Cookies.set('token', login.token);
            Cookies.set('userId', login.userId);
            Cookies.set('username', login.nome);
            Cookies.set('auth', login.auth);
            Cookies.set('adm', login.adm);
        });
        window.location.href = window.location.href.split('/pages')[0];
    }).post(formJson);
});