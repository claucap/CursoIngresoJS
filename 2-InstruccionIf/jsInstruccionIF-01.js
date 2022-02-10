/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/


function mostrar() {
	//declaracion de variable

	let edad;

	// entrada de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// condición y salida de datos

	if (edad == 15) {
		alert("niña bonita");
	}


}//FIN DE LA FUNCIÓN