/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/	

function mostrar() {

	//declaracion de variable

	let edad;

	// entrada de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// condición y salida de datos

	if (edad >= 18) {
		alert("Usted es mayor de edad");
	}
	else {
		alert("Usted es menor de edad");

	}

}//FIN DE LA FUNCIÓN