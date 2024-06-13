import { menu, footer } from "./components.js";
import Request from "./request.js";
import Template from "./template.js";

const menuEl = document.getElementById('menu-component');
const footerEl = document.getElementById('footer-component');

menu().then(function (html) {
    menuEl.innerHTML = html;
    document.getElementById('btn-mobile').addEventListener('click', toggleMenu);
    document.getElementById('btn-mobile').addEventListener('touchstart', toggleMenu);
    
    new Request((categorias)=>{
        document.getElementById('categoriasList').innerHTML += new Template().categoriasList(categorias);
    }).getCategorias();
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

