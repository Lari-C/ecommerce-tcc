import Cart from "../classes/carrinho.js";
import Request from "../classes/request.js";

const tbody = document.getElementById('tbody');
let total = document.getElementById("total-count");

addEventListener("DOMContentLoaded", () => {
    renderItems();
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        new Request(`/login`, (usuarioLogado) =>{
            if(!usuarioLogado.auth)
                window.location.href = window.location.href.split('/carrinho.html')[0] + '/login.html';
            else 
                window.location.href = window.location.href.split('/carrinho.html')[0] + '/entrega.html';
        }).getIsUserLogedIn();
    })
});

function renderItems(){
    tbody.innerHTML = "";
    const produtosCarrinho = new Cart().getCart();
    produtosCarrinho.forEach((pc) => {
        new Request(`/produtos/${pc.id}`, (produto) =>{
            tbody.innerHTML +=
            `<tr data-id="${produto.id}" class="carrinho">
                <td class="produto-identificacao">
                    <img src="/img/img_card/${produto.card_img}.jpg" alt="" class="carrinho-img" style="border-radius: 10px;">
                    <strong class="carrinho-titulo">${produto.nome}</strong>
                </td>
                <td id="produto-preco">
                    <span>R$<span class="carrinho-preco">${produto.preco.toFixed(2)}</span></span> 
                </td>
                <td id="produto-qtd">
                    <input type="number" class="qtd" min="1" value="${pc.qtd}">
                    <button type="button" class="remover">Remover</button>
                </td>
            </tr>
            <br>`;

            setTimeout(() => {
                setup(produto.id, produto.estoque);
            }, "500");

        }).get();
    });
}

function setup(id, estoque){
    calculaTotal();
    const row = document.querySelectorAll(`[data-id='${id}']`)[0];

    row.querySelector('.remover').addEventListener('click', () => {
        new Cart().removeFromCart(row.dataset.id);
        row.remove();
        calculaTotal();
    });

    row.querySelector('.qtd').addEventListener('change', (el) => {
        if(el.target.value > estoque){
            el.target.value = estoque
        } else if (el.target.value < 1)
            el.target.value = 1
        calculaTotal();
    });
}

function calculaTotal(){
    total.innerText = "";
    const rows = document.querySelectorAll('.carrinho');
    let calculo = 0.0;
    rows.forEach((r) => {
        calculo += parseFloat(r.querySelector('.carrinho-preco').innerText) * (parseInt(r.querySelector('.qtd').value));
    });
    total.innerText = calculo.toFixed(2);
}


