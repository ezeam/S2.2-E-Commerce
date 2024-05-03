// Exercise 6
function validate() {
	

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
				
        form.classList.add('was-validated')
      }, false)
    })
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	const name = fName.value.trim();
	const email = fEmail.value;
	const address = fAddress.value;
	const lastName = fLastN.value;
	const password = fPassword.value;
	const phone = fPhone.value;

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAdress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email

//NO FUNCIONA: EXPRESIÓN REGULAR DE IF NAME IF EMAIL IF PASSWORD, 
//nombre y apellidos solo pueden tener letras y tlf solo números

	//VALIDACIÓN DEL CAMPO NOMBRE:
	if (!/^[a-zA-Z]+$/.test(fName.value.trim()) || fName.value == "" || fName.value.length < 3) {
    errorName.innerText = "El campo no puede estar vacío, debe tener más de 3 caracteres y sólo contener letras";
    //error++;
}


	//VALIDACIÓN DEL CAMPO EMAIL:
	if(email === "" || email.length < 3 || !validaEmail(email)){
		errorEmail.innerText = "El campo no puede estar vacío, debe tener al menos 3 letras y tener un formato correcto";
		//error++;
	}

	//VALIDACIÓN DEL CAMPO DIRECCIÓN:
	if(address === "" || address.length < 3){
		errorAdress.innerText = "El campo no puede estar vacío no tener menos de 3 caracteres";
		//error++;

	}

	//VALIDACIÓN DEL CAMPO APELLIDO:
	if(lastName === "" || lastName.length < 3){
		errorLastN.innerText = "El campo no puede estar vacío, debe tener más de 3 caracteres y sólo contener letras";
		//error++;

	}

	//VALIDACIÓN DEL CAMPO CONTRASEÑA:
	if(password == "" || password.length < 4 || password.length > 8 || password.match(er)){
		errorPassword.innerText = "El campo no puede estar vacío, debe tener entre 4 y 8 caracteres y como mínimo un número";
		//error++;
	} 

	//VALIDACIÓN DEL CAMPO TLF:
	if(phone == "" || phone.length < 3){
		errorPhone.innerText = "El campo teléfono no puede estar vacío";
		//error++; 

	}
	 
	/*if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/

}

const validaEmail = (email) => {
	console.log("Entras?");
  return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
