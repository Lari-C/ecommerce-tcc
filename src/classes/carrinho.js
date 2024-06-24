export default class Carrinho {
    constructor() {
        this.initializeCart();
        this.cartEl = document.getElementById('quantidade-carrinho');
        this.cart = JSON.parse(sessionStorage.getItem('cart'));
        this.isUpdate = false;
    }

    initializeCart() {
        if (!sessionStorage.getItem('cart')) {
            sessionStorage.setItem('cart', JSON.stringify([]));
        }
    }

    renderCartQtd(){
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        this.cartEl.innerHTML = cart.length;
    }

    addToCart(product) {
        for (let p of this.cart) {
            if (p.id === product.id) {
                this.isUpdate = true;
                p.qtd = product.qtd;
                sessionStorage.setItem('cart', JSON.stringify(this.cart));
                break;
            }
        }
        if(!this.isUpdate){
            this.cart.push(product);
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
            this.renderCartQtd();
        }
    }

    addQtd(id, qtd){
        for (let p of this.cart) {
            if (p.id === id) {
                p.qtd = qtd;
                sessionStorage.setItem('cart', JSON.stringify(this.cart));
                break;
            }
        }
    }

    getCart() {
        return this.cart;
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(product => product.id !== productId);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        this.renderCartQtd();
    }

    getTotalValue(){
        let total = 0.0;
        this.cart.forEach(element => {
            total += parseInt(element.qtd) * parseFloat(element.preco); 
        }); 
        return total;
    }
}