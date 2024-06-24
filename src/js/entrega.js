import Request from "../classes/request.js";
import Notificacao from "../classes/notificacao.js";
import Cart from "../classes/carrinho.js";

const tbody = document.getElementById('tbody');
const tbodyCarrinho = document.getElementById('tbody-carrinho');
const form = document.getElementById('endereco-form');
const enderecosCadastrados = document.getElementById('enderecos-cadastrados');

let total = document.getElementById("total-count");

addEventListener("DOMContentLoaded", () => {
    carregaCarrinho();
    loadEnderecos();
})

function loadEnderecos(){
    enderecosCadastrados.classList.add("d-none")
    tbody.innerHTML = "";
    new Request(`/endereco/${Cookies.get('userId')}`, (endereco)=>{
        form.classList.add("d-none");
        enderecosCadastrados.classList.remove("d-none");
        if(endereco){
            tbody.innerHTML += `
                <tr data-id="${endereco.id}">
                    <td class="text-center align-middle">
                        <input type="radio" class="radio-ender" name="endereco" value="${endereco.id}">
                    </td>
                    <td class="text-center">
                        <span>Rua: ${endereco.rua}, ${endereco.numero}</span> 
                        <br>
                        <span>Bairro: ${endereco.bairro}</span> 
                        <br>
                        <span>Complemento: ${endereco.complemento}</span> 
                        <br>
                        <span>Cidade: ${endereco.cidade}</span> 
                    </td>
                    <td class="text-center align-middle cep">
                        CEP: ${endereco.cep}
                    </td>
                    <td class="text-center align-middle">
                        <i class="fa-solid fa-trash remover"></i>
                    </td>
                </tr>
            `
        }
        setTimeout(() => {
            setup(endereco.id);
        }, "500");
    }).get();
}

function setup(id){
    const row = document.querySelectorAll(`[data-id='${id}']`)[0];
    row.querySelector('.remover').addEventListener('click', (el) => {
        new Request(`/endereco/${id}`, (res)=>{
            if(res.status === 200){
                new Notificacao().sucesso("Endereço removido com sucesso.");
                loadEnderecos();
            }
        }).delete();
    });

    row.querySelector('input[name="endereco"]').addEventListener('click', () => {
        calcularFrete(row.querySelector('.cep').innerText.replace(/[^0-9]/g, ''))
    });
}

function carregaCarrinho(){
    tbodyCarrinho.innerHTML = "";
    const produtosCarrinho = new Cart().getCart();
    produtosCarrinho.forEach((pc) => {
        new Request(`/produtos/${pc.id}`, (produto) =>{
            tbodyCarrinho.innerHTML +=
            `<tr data-id="${produto.id}" class="carrinho">
                <td class="text-center align-middle">
                    <strong class="carrinho-titulo">${produto.nome}</strong>
                </td>
                <td class="text-center align-middle">
                    <span>R$<span class="carrinho-preco">${produto.preco.toFixed(2)}</span></span> 
                </td>
                <td class="text-center align-middle">
                    <span class="qtd">${pc.qtd}</span>
                </td>
            </tr>
            `;
        }).get();
    });
    setTimeout(() => {
        calculaTotal();
    }, "1000");
}

function calculaTotal(){
    total.innerText = "";
    const rows = document.querySelectorAll('.carrinho');
    let calculo = 0.0;
    rows.forEach((r) => {
        calculo += parseFloat(r.querySelector('.carrinho-preco').innerText) * (parseInt(r.querySelector('.qtd').innerText));
    });
    total.innerText = calculo.toFixed(2);
}

function calcularFrete(cep){
    const rows = document.querySelectorAll('.carrinho');
    let produtosQtdCep = [];
    rows.forEach((r) => {
        produtosQtdCep.push({
            id: r.dataset.id,
            qtd: r.querySelector('.qtd').innerText,
            cep: cep
        });
    });

    new Request(`/calcula-frete`, (res) =>{
        document.getElementById('prazos').innerHTML = `
            <span>Carregando...</span>
        `;
        res.json().then(data => {
            document.getElementById('prazos').innerHTML =`
                <table class="prazo-tabela table">
                    <thead>
                        <tr style="text-align: center;">
                            <th style="width: 130px;"></th>
                            <th style="width: 130px;">Forma de envio:</th>
                            <th style="width: 130px;">Valor:</th>
                            <th style="width: 130px;">Prazo de entrega:</th>
                        </tr>
                    </thead>
                    <tbody id="tbody-prazos">
                    </tbody>
                </table>
            `;
            data.forEach(frete => {
                document.getElementById('tbody-prazos').innerHTML += `
                    <tr>
                        <td class="text-center align-middle">
                            <input type="radio" class="radio-prazo" name="prazo" value="">
                        </td>
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
    }).post(produtosQtdCep);
}

document.getElementById('novo-endereco').addEventListener('click', ()=>{
    form.classList.remove("d-none");
})

form.addEventListener('submit', e => {
    const formData = new FormData(form);
    e.preventDefault();
    const formJson = {
        id_usuario: Cookies.get('userId'),
        rua: formData.get('rua'),
        numero: formData.get('numero').replace(/[^0-9]/g, ''),
        bairro: formData.get('bairro'),
        complemento: formData.get('complemento'),
        cidade: formData.get('cidade'),
        cep:  formData.get('cep').replace(/[^0-9]/g, '')
    };
    new Request('/endereco', (res)=>{
        if(res.status === 201){
            new Notificacao().sucesso("Endereço cadastrado com sucesso.");
            loadEnderecos();
        }
    }).post(formJson);
});
