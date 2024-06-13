export default class RequestAPI {
    constructor(callback) {
        this.BERLOCARIA_API_URL = "https://ecommerce-tcc-api-production.up.railway.app"
        //this.BERLOCARIA_API_URL = "http://localhost:26399"
        this.callback = callback;
    }

    getProdutosByCategoria(categoriaId){
        fetch(`${this.BERLOCARIA_API_URL}/produtos/categoria/${categoriaId}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(produto => {
                this.callback(produto)
            })
        });
    }

    getProdutosById(id){
        fetch(`${this.BERLOCARIA_API_URL}/produtos/${id}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(produto => {
                this.callback(produto)
            })
        });
    }

    getCategoriasById(id){
        fetch(`${this.BERLOCARIA_API_URL}/categorias/${id}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(produto => {
                this.callback(produto)
            })
        });
    }

    getCategorias(){
        fetch(`${this.BERLOCARIA_API_URL}/categorias`)
        .then(res => res.json())
        .then(categorias => {
            this.callback(categorias)
        });
    }
}