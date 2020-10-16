function enviardados(){
    
    var name = $("#inputName").val().length;
    var lastName = $("#inputLastName").val().length;
    var email = $("#inputEmail").val().length;
    var password = $("#inputPassword").val().length;
    var address = $("#inputAddress").val().length;
    var phone = $("#inputPhone").val().length;
    
    if(name < 3){
        name.classList.remove('valida'),
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('valida'),
        name.classList.add('is-valid');
    } 

    if(lastName < 3){
        lastName.classList.remove('valida'),
        lastName.classList.add('is-invalid');
    }else{
        lastName.classList.remove('valida'),
        lastName.classList.add('is-valid');
    } 

    if(email < 8){
        email.classList.remove('valida'),
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('valida'),
        email.classList.add('is-valid');
    } 
    
    if(password < 8){
        password.classList.remove('valida'),
        password.classList.add('is-invalid'),
        alert("A sua senha deve ter no mìnimo 8 digitos!");
    }else{
        password.classList.remove('valida'),
        password.classList.add('is-valid');
    } 

    if(address < 10){
        address.classList.remove('valida'),
        address.classList.add('is-invalid');
    }else{
        address.classList.remove('valida'),
        address.classList.add('is-valid');
    } 

    if(phone < 15){
        phone.classList.remove('valida'),
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('valida'),
        phone.classList.add('is-valid');
    } 
}

function username(){
    var inputEmail = document.getElementById('inputEmail');  
    var userName =document.getElementById('userName');

    if(inputEmail != ''){
        userName.innerHTML = inputEmail;
    }
}

function signIn(){
    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');

    if(inputEmail && inputPassword != ''){
        window.location.href = "../../admin.html";
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado, Tente novamente!'
        })
    }
}
