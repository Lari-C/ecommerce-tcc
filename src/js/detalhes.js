import Request from "../classes/request.js";
import Cart from "../classes/carrinho.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

function initializeCart() {
    if (!sessionStorage.getItem('cart')) {
        sessionStorage.setItem('cart', JSON.stringify([]));
    }
}

initializeCart();

addEventListener("load", () => {
    new Request(`/produtos/${id}`, (produto) =>{
        document.getElementById('produtoImage').src = `../img/img_detalhes/${produto.detail_img}.jpg`;
        document.getElementById('produtoObs').innerHTML = produto.observacao;
        document.getElementById('produtoNome').innerHTML = produto.nome;
        document.getElementById('estoque').innerText = `Em estoque:  ${produto.estoque} un.`;
        document.getElementById('produtoPreco').innerHTML = `R$${produto.preco.toFixed(2)}`;
        document.getElementById('btn-comprar').addEventListener('click', () => {
            let newProduct = 
            { 
                id: produto.id,
                qtd: document.getElementById('quantidade').value,
            };
            new Cart().addToCart(newProduct);
        });
        document.getElementById('quantidade').addEventListener('change', (el) => {
            if(document.getElementById('quantidade').value > produto.estoque){
                document.getElementById('quantidade').value = produto.estoque
            }
        });
    }).get();

    document.getElementById('btn-frete').addEventListener('click', () =>{
        new Request(`/calcula-frete`, (res) =>{
            document.getElementById('prazos').innerHTML = `
                <span>Carregando...</span>
            `;
            res.json().then(data => {
                document.getElementById('prazos').innerHTML =`
                    <table class="prazo-tabela">
                        <thead>
                            <tr style="text-align: center;">
                                <th style="width: 130px;">Forma de envio:</th>
                                <th style="width: 130px;">Valor:</th>
                                <th style="width: 130px;">Prazo de entrega:</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                        </tbody>
                    </table>
                `;
                data.forEach(frete => {
                    document.getElementById('tbody').innerHTML += `
                        <tr>
                            <td style="text-align: center;">
                                <span>${frete.serviço}</span>
                            </td>
                            <td style="text-align: center;">
                                <span>R$${frete.valor}</span>
                            </td>
                            <td style="text-align: center;">
                                <span>${frete.prazo} dias</span>
                            </td>
                        </tr>
                    `;
                });
            });
        }).post({
            "id": id,
            "qtd": document.getElementById('quantidade').value,
            "cep": document.getElementById('cep').value
        });
    });
});



