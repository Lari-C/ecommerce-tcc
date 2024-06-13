import Request from "./request.js";
import Template from "./template.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

addEventListener("load", () => {
    new Request((produtos)=>{
        document.getElementById('categoriaCards').innerHTML += new Template().card(produtos);
    }).getProdutosByCategoria(id);

    new Request((categoria)=>{
        if(categoria.nome == 'Familia')
            categoria.nome = 'Família'
        document.getElementById('categoriaNome').innerHTML = categoria.nome;
    }).getCategoriasById(id);
});