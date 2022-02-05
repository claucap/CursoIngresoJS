/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	//declaracion de variables
	var nombreIngresado;

	//origen de datos
	nombreIngresado = prompt ("ingrese su nombre");

	//salida de datos
	document.getElementById("txtIdNombre").value = nombreIngresado;

}





/*function mostrar()
{// reservo espacio en memoria para guardar el nombre del usuario
	let nombreIngresado;
	// guardo en la variable nombre el texto que escribio el usuario dentro de la ventana promt
	nombre = prompt ("ingrese su nombre: ");
	//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html
	document.getElementById ("txtIdNombre"). value = nombreIngresado;

}
/* la caja esta como solo lectura. el usuario no la puede modificar. el mensaje se muestra al usuario 
mediante el html
la declaracion de variables se indican al principio del programa
promt: crea una caja de texto con dos botones: aceptar o cancelar- si aprieta aceptar devuelve el texto que
esta escrito en la caja de texto
la mayuscula para separar palabras*/