/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar() {

	//declaracion de variable

	let edad;

	// entrada de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// condición y salida de datos

	if (edad >= 18) {
		alert("Usted es mayor de edad");
	}


}//FIN DE LA FUNCIÓN