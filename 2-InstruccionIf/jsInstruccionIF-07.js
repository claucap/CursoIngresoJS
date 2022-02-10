/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/

function mostrar() {
	//declaración de variables

	var edad;
	var estadoCivil;

	// origen de datos

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//condición y salida de datos

	if(edad < 18 && estadoCivil != "Soltero") {

		alert("Es muy pequeño para no ser soltero");
	}





}//FIN DE LA FUNCIÓN