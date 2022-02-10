function mostrar() {
	//declaracion de variable

	let edad;

	// Ingreso de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Condición y salida de datos

	if (edad >= 13 && edad <= 17) {

		alert("Usted es adolescente");

	}
}//FIN DE LA FUNCIÓN