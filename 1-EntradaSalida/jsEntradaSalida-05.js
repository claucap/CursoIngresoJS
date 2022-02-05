/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
  // declaracion de variables

  var nombre;
  var edad;

  // origen de datos

  nombre = document.getElementById("txtIdNombre").value;
  edad = document.getElementById("txtIdEdad").value;

  //salida de datos


  alert ("Usted se llama "  + nombre + " y tiene " + edad + " años ");

}

/*let nombre;
	let edad;

	nombre = document.getElementById ("txtIdNombre").value;
	edad = document.getElementById ("txtIdEdad").value;

	alert("Usted se llama "  + nombre + " y tiene " + edad + " años ");

	/* OTRA FORMA DE HACERLO:
	alert(`usted se llama ${nombre} y tiene ${edad} años`)
	* LET ES COMO VAR PERO GUARDA LA DECLARADA SOLAMENTE EN ESTE BLOQUE*/