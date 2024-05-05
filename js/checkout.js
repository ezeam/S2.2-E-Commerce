// Exercise 6
function validate(event) {
  //Para quitar las validaciones propias de HTMl y Bootstrap
  event.preventDefault();

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
//!/^[a-zA-Z]+$/.test(fName.value.trim()) 

	//VALIDACIÓN DEL CAMPO NOMBRE:
	if (hasOnlyLetters(name) && name != "" && name.length >= 3) {		
    ok(fName);   
	}
	else {
    notOk(fName);
	}

	//VALIDACIÓN DEL CAMPO EMAIL:
  if (verifyEmail(email) && email != "" && email.length >= 3) {		
    ok(fEmail);   
	}
	else {
    notOk(fEmail);
	}

	//VALIDACIÓN DEL CAMPO DIRECCIÓN:
  if (address != "" && address.length >= 3) {		
    ok(fAddress);   
	}
	else {
    notOk(fAddress);
	}

	//VALIDACIÓN DEL CAMPO APELLIDO:
  if (hasOnlyLetters(lastName) && lastName != "" && lastName.length >= 3) {		
    ok(fLastN);   
	}
	else {
    notOk(fLastN);
	}

	//VALIDACIÓN DEL CAMPO CONTRASEÑA:
  if (verifyPassword(password) && password != "" && password.length >= 4 && password.length <= 8) {		
    ok(fPassword);   
	}
	else {
    notOk(fPassword);
	}
  
	//VALIDACIÓN DEL CAMPO TLF:
  if (phone != "" && phone.length >= 3) {		
    ok(fPhone);   
	}
	else {
    notOk(fPhone);
	}
}


//CUSTOM FUNCTIONS
function verifyEmail(email){
  console.log("Entras en verify email?");
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}


function hasOnlyLetters(fieldValue) {
  //+$ ensures one character
  const regularExpression = new RegExp(/^[A-Za-z]+$/);
  return regularExpression.test(fieldValue);
}

function ok (obj){
  obj.classList.remove('is-invalid');     
  obj.classList.add('is-valid');
}

function notOk (obj){
  obj.classList.add('is-invalid');
  errorName.innerText = "El campo no puede estar vacío, debe tener más de 3 caracteres y sólo contener letras";
}

function verifyPassword(password){
 return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password.trim())
}
