/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar() {
	//declaracion de variable

	var edad;

	// origen de datos

	edad = document.getElementById("txtIdEdad").value;

	// condicion y salida de datos

	if (edad <= 12) {
		alert("usted es un niño");
	}

	else

	if (edad >= 13 && edad <= 17 ) {
	alert("usted es un adolescente");
	}
	
	else

	if (edad >= 18) {
	alert("Usted es mayor de edad");
	
	}

}//FIN DE LA FUNCIÓN