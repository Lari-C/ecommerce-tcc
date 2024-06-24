export default class RequestAPI {
    constructor(endPoint, callback) {
        //this.BERLOCARIA_API_URL = "https://ecommerce-tcc-api-production.up.railway.app"
        this.BERLOCARIA_API_URL = "http://localhost:26399"
        this.callback = callback;
        this.endPoint = endPoint;
    }

    get(){
        fetch(`${this.BERLOCARIA_API_URL}${this.endPoint}`)
        .then(res => res.json())
        .then(data => {
            if(data.length)
                data.forEach(produto => {
                    this.callback(produto)
                })
            else
                this.callback(null)
        });
    }

    post(body){
        fetch(`${this.BERLOCARIA_API_URL}${this.endPoint}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        })
        .then(response => this.callback(response));
    }

    getIsUserLogedIn(){
        fetch(`${this.BERLOCARIA_API_URL}${this.endPoint}`, {
            method: 'GET',
            headers:{
                "x-access-token": Cookies.get('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            this.callback(data);
        });
    }

    delete(){
        fetch(`${this.BERLOCARIA_API_URL}${this.endPoint}`, {
            method: 'DELETE'
        })
        .then(response => this.callback(response))
    }
}
