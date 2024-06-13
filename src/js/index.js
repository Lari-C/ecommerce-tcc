import Request from "./request.js";
import Template from "./template.js";

addEventListener("load", () => {
    new Request((produtos)=>{
        document.getElementById('lancamentos').innerHTML += new Template().card(produtos);
    }).getProdutosByCategoria(1);

    new Request((produtos)=>{
        document.getElementById('favoritos').innerHTML += new Template().card(produtos);
    }).getProdutosByCategoria(2);
});