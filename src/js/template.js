export default class Template {
    card(data){
        return` 
        <a href="/src/pages/detalhes.html?id=${data.id}">
            <div class="card">
                <img src="/src/img/img_card/${data.card_img}.jpg">
                <span class="sep"></span>
                <h3>${data.nome}</h3>
                <h4>R$ ${data.preco.toFixed(2)}</h4>
                <button>COMPRAR</button>
            </div>
        </a>`
    }

    categoriasList(data){
        let html = '';
        data.forEach(categoria => {
            html += `<li><a href="/src/pages/categorias.html?id=${categoria.id}">${categoria.nome}</a></li>`
        });
        return html;
    }
}