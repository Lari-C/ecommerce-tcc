import Request from "../classes/request.js";
import Validacao from "../classes/validacao.js";
import Notificacao from "../classes/notificacao.js";

const form = document.getElementById('cadastro-form');
const cadastroBtn = document.getElementById('cadastro-btn');


form.addEventListener('submit', e => {
    e.preventDefault();
    cadastroBtn.disabled = true;
    const formData = new FormData(form);
    const formJson = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        senha: formData.get('senha'),
    };

    if(!new Validacao().nome(formJson.nome))
        new Notificacao().alerta("O nome deve conter no  mínimo 6 e no máximo 50 caracteres.");

    else if(!new Validacao().email(formJson.email))
        new Notificacao().alerta("Insira um email válido.");
    
    else if(!new Validacao().senha(formJson.senha))
        new Notificacao().alerta("A senha deve conter no mínimo 8 e no máximo 16 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um carácter especial.");
        
    else if(!formData.get('senha') == formData.get('senhaConfirma'))
        new Notificacao().alerta("As senhas devem coincidir.");

    else{
        new Request('/usuarios', (res)=>{
            if(res.status == 400 || res.status == 500)
                res.json().then(message => new Notificacao().erro(message.result));
            else{
                new Notificacao().sucesso("Conta cadastrada com sucesso.");
                setTimeout(function() {
                    window.location.href = window.location.href.split('/cadastro')[0] + '/login.html';
                 }, 1000);
            }
        }).post(formJson);
    }
    cadastroBtn.disabled = false;
});
