
const API_URL = 'https://ecommerce-tcc-api-production.up.railway.app'

addEventListener("load", () => {
    fetch(`${API_URL}/produtos`)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            document.getElementById('lancamentos').innerHTML += 
            `<a href="./pages/detalhes.html">
                <div class="card">
                    <img src="./img/${element.card_img}">
                    <span class="sep"></span>
                    <h3>${element.nome}</h3>
                    <h4>R$ ${element.preco}</h4>
                    <button>COMPRAR</button>
                </div>
            </a>`
        });
    })
});
