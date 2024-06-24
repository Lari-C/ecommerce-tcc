import { menu, footer } from "./components.js";
import Cart from "../classes/carrinho.js";
import Request from "../classes/request.js";
import Template from "../classes/template.js";

const menuEl = document.getElementById('menu-component');
const footerEl = document.getElementById('footer-component');

menu().then(function (html) {
    menuEl.innerHTML = html;
    document.getElementById('btn-mobile').addEventListener('click', toggleMenu);
    document.getElementById('btn-mobile').addEventListener('touchstart', toggleMenu);
    
    new Request('/categorias', (categorias)=>{
        document.getElementById('categoriasList').innerHTML += new Template().categoriasList(categorias);
    }).get();

    if(Cookies.get('auth')){
        document.getElementById('cadastro').classList.add("d-none");
        document.getElementById('login').classList.add("d-none");
        document.getElementById('sair').classList.remove("d-none");
    }
    
    document.getElementById('sair').addEventListener('click', () => {
        Cookies.remove('token');
        Cookies.remove('username');
        Cookies.remove('auth');
        Cookies.remove('adm');
        document.getElementById('cadastro').classList.remove("d-none");
        document.getElementById('login').classList.remove("d-none");
        document.getElementById('sair').classList.add("d-none");
        window.location.href = window.location.href.split('/pages')[0];
    });
    
    new Cart().renderCartQtd();
});

footer().then(function (html) {
    footerEl.innerHTML = html;
});

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}



