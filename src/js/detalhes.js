import Request from "./request.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

addEventListener("load", () => {
    new Request((produto)=>{
        document.getElementById('produtoImage').src = `../img/img_detalhes/${produto.detail_img}.jpg`;
        document.getElementById('produtoObs').innerHTML = produto.observacao;
        document.getElementById('produtoNome').innerHTML = produto.nome;
        document.getElementById('produtoPreco').innerHTML = `R$${produto.preco.toFixed(2)}`;
    }).getProdutosById(id);
});