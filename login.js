function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "26/11/22" && senha == "festajunina"){
        alert('Sucesso');
        location.href = "login.html";
    }else{
        alert('Usuario ou senha incorretos');
    }


    


}