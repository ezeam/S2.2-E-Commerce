
// Exercise 6
//Este método es para capturar las informaciones que nos manda el usuario
window.addEventListener('load', () => {
  const form = document.getElementById('formulario');
  const fName = document.getElementById('fName');
  const fEmail = document.getElementById('fEmail');
  const fAddress = document.getElementById('fAddress');
  const fLastN = document.getElementById('fLastN');
  const fPassword = document.getElementById('fPassword');
  const fPhone = document.getElementById('fPhone');

//Esta función es para quitar el comportamiento por defecto que tiene  la página cuando lanzamos submit
//De esta manera podemos verificar el formulario tantas veces como queramos hasta que se cumplan las 
//condiciones necesarias para que se valide el formulario
/*form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate()
})*/
})

 validate = () => {
	//var error = 0;
	// Get the input fields
	var fNameValor = fName.value.trim();
	var fEmailValor = fEmail.value;
  var fAddressValor = fAddress.value;
  var fLastNValor = fLastN.value;
  var fPasswordValor = fPassword.value;
  var fPhoneValor = fPhone.value;

	// Get the error elements
	//var errorName = document.getElementById("errorName");
	//var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	//VALIDANDO CAMPO NOMBRE
  if(!fNameValor){
    console.log("Nombre está vacío");
    validaFalla(fName, 'Campo vacío');
  }




	/*/if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/

}

const validaFalla = (input, msje) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector('div');
  aviso.innerText = msje;

  formControl.className = "form-control falla";
};