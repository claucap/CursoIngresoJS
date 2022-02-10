/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar() {
	//declaracion de variable

	let edad;

	// Ingreso de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Condición y salida de datos

	if (edad >= 13 && edad <= 17) {

		alert("Usted es adolescente");


	}
}