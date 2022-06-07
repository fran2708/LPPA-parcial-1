window.onload = function() {

    var fname = document.getElementById('inputFname');
    var lname = document.getElementById('inputLname');
    var email = document.getElementById('inputEmail');
    var edad = document.getElementById('inputEdad');

    document.getElementById("btnSuscribir").addEventListener("click", function() {   
        validateFName();
        validateLName();
        validateEmail();
        validateEdad();

    });

    fname.addEventListener('focus', removeFNameError);
    lname.addEventListener('focus', removeLNameError);
    email.addEventListener('focus', removeEmailError);
    edad.addEventListener('focus', removeEdadError);

    function validateFName(e) {
        let x = fname.value;
        if(x.length < 3) {
            fname.setCustomValidity("Al menos 3 caracteres");
            fname.classList.add('input-error');
        }
    }

    function removeFNameError(e) {
        fname.setCustomValidity("");
        fname.classList.remove('input-error');
    }

    function validateLName(e) {
        let x = lname.value;
        if(x.length < 3) {
            lname.setCustomValidity("Al menos 3 caracteres");
            lname.classList.add('input-error');
        }
    }

    function removeLNameError(e) {
        lname.setCustomValidity("");
        lname.classList.remove('input-error');
    }

    function validateEmail(e) {
        let x = email.value;
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(x.length < 1) {
            email.setCustomValidity("Debe ingresar un email");
            email.classList.add("input-error");
        }else if (!x.match(regex)) {
            email.setCustomValidity("Email no valido");
            email.classList.add("input-error");
        }
    }

    function removeEmailError(e) {
        email.setCustomValidity("");
        email.classList.remove("input-error");
    }

    function validateEdad(e) {
        let x = edad.value;
        if (x.length < 1) {
            edad.setCustomValidity("Ingrese una edad");
            edad.classList.add('input-error');
        } else if (isNaN(x)) {
            edad.setCustomValidity("Debe ser un numero");
            edad.classList.add('input-error');
        } else if (x < 0 || x > 100) {
            edad.setCustomValidity("Debe ser entre 0 y 100");
            edad.classList.add('input-error');
        } else {
            edad.setCustomValidity("");
            edad.classList.remove('input-error');
        }
    }

    function removeEdadError(e) {
        edad.setCustomValidity("");
        edad.classList.remove('input-error');
    }
}