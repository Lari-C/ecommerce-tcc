
addEventListener("load", () => {
    fetch('http://localhost:3000/produtos/')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            document.getElementById('lancamentos').innerHTML += 
            `<a href="./pages/detalhes.html">
                <div class="card">
                    <img src="./img/${element.img}">
                    <span class="sep"></span>
                    <h3>${element.nome}</h3>
                    <h4>R$ ${element.preco}</h4>
                    <button>COMPRAR</button>
                </div>
            </a>`
        });
    })
});
