export default class Notificacao {
    sucesso(text){
        let notificacao = document.createElement('div');
        notificacao.classList.add("toast-notifications");
        document.body.append(notificacao);
        let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast-div 'toast-success'">
                <i class="fa-solid fa-circle-check"></i>
                <div class="toast-content">
                    <div class="toast-title">
                        Sucesso
                    </div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                    onclick="(this.parentElement).remove()"
                ></i>
            </div>
        `
        notificacao.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=> newToast.remove(), 10000
        )
    }

    erro(text){
        let notificacao = document.createElement('div');
        notificacao.classList.add("toast-notifications");
        document.body.append(notificacao);
        let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast-div toast-error">
                <i class="fa-solid fa-circle-exclamation"></i>
                <div class="toast-content">
                    <div class="toast-title">
                        Erro
                    </div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                    onclick="(this.parentElement).remove()"
                ></i>
            </div>
        `
        notificacao.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=> newToast.remove(), 10000
        )
    }

    alerta(text){
        let notificacao = document.createElement('div');
        notificacao.classList.add("toast-notifications");
        document.body.append(notificacao);
        let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast-div toast-warning">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="toast-content">
                    <div class="toast-title">
                        Alerta
                    </div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                    onclick="(this.parentElement).remove()"
                ></i>
            </div>
        `
        notificacao.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=> newToast.remove(), 10000
        )
    }

    info(text){
        let notificacao = document.createElement('div');
        notificacao.classList.add("toast-notifications");
        document.body.append(notificacao);
        let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast-div toast-info">
                <i class="fa-solid fa-circle-info"></i>
                <div class="toast-content">
                    <div class="toast-title">
                        Informação
                    </div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                    onclick="(this.parentElement).remove()"
                ></i>
            </div>
        `
        notificacao.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=> newToast.remove(), 10000
        )
    }
}