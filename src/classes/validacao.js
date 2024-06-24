export default class Validacao {
    email(email){
        return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    }

    senha(senha){
        return senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
    }

    nome(nome){
        return nome.match(/^[A-zÀ-ÿ\s]{6,50}$/)
    }
}