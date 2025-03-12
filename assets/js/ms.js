var form = document.getElementById("formId");
function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);


function enviar_mensaje() {

    var nombre = document.getElementById("nombre").value;

    var emp = document.getElementById("empresa").value;

    var txt = document.getElementById("campo1").value;

    var texto = '';

    if (nombre == '' || emp == '' || txt == ''){
        
        texto = `Hola, estoy interesado en trabajar con ustedes.
    `;
    }else if(nombre != '' && emp != '' && txt != ''){
        texto = `Hola me llamo ${nombre}, trabajo en ${emp},
        y estamos interesados en trabajar con ustedes.
        Mis aclaraciones/comentarios son: ${txt}
    `;
    }else{
        texto = '';
    }



    var tel = +541156615583;

    var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;

    window.open(url);


}