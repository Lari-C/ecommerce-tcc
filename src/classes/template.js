export default class Template {
    card(data){
        return` 
        <a href="/pages/detalhes.html?id=${data.id}">
            <div class="card">
                <img src="/img/img_card/${data.card_img}.jpg">
                <span class="sep"></span>
                <h3>${data.nome}</h3>
                <h4>R$ ${data.preco.toFixed(2)}</h4>
                <button>COMPRAR</button>
            </div>
        </a>`
    }

    categoriasList(data){
        const html = `<li><a href="/pages/categorias.html?id=${data.id}">${data.nome}</a></li>`
        return html;
    }
}
