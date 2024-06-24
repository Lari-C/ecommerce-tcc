import Request from "../classes/request.js";
import Template from "../classes/template.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

addEventListener("load", () => {
    new Request(`/produtos/categoria/${id}`, (produtos)=>{
        document.getElementById('categoriaCards').innerHTML += new Template().card(produtos);
    }).get();

    new Request(`/categorias/${id}`, (categoria)=>{
        if(categoria.nome == 'Familia')
            categoria.nome = 'Família'
        document.getElementById('categoriaNome').innerHTML = categoria.nome;
    }).get();
});