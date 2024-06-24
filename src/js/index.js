import Request from "../classes/request.js";
import Template from "../classes/template.js";

addEventListener("load", () => {
    new Request(`/produtos/categoria/1`, (produtos)=>{
        document.getElementById('lancamentos').innerHTML += new Template().card(produtos);
    }).get();

    new Request(`/produtos/categoria/2`, (produtos)=>{
        document.getElementById('favoritos').innerHTML += new Template().card(produtos);
    }).get();
});