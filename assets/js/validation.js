function valida_form (){
    if(document.getElementById("inputName").value.length < 3){
        inputName.classList.remove('valida'),
        inputName.classList.add('is-invalid');
    }else{
        inputName.classList.remove('valida'),
        inputName.classList.add('is-valid');
    } 

    if(document.getElementById("inputLastName").value.length < 3){
        inputLastName.classList.remove('valida'),
        inputLastName.classList.add('is-invalid');
    }else{
        inputLastName.classList.remove('valida'),
        inputLastName.classList.add('is-valid');
    } 

    if(document.getElementById("inputPassword4").value.length < 8){
        inputPassword4.classList.remove('valida'),
        inputPassword4.classList.add('is-invalid'),
        alert("A sua senha deve ter no mìnimo 8 digitos!");
    }else{
        inputPassword4.classList.remove('valida'),
        inputPassword4.classList.add('is-valid');
    } 
    
    if(document.getElementById("inputAddress").value.length < 10){
        inputAddress.classList.remove('valida'),
        inputAddress.classList.add('is-invalid');
    }else{
        inputAddress.classList.remove('valida'),
        inputAddress.classList.add('is-valid');
    } 

    if(document.getElementById("inputPhone").value.length < 15){
        inputPhone.classList.remove('valida'),
        inputPhone.classList.add('is-invalid');
    }else{
        inputPhone.classList.remove('valida'),
        inputPhone.classList.add('is-valid');
    } 
}
    