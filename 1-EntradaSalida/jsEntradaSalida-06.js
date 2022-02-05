/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//ingreso de datos
	var numeroUno;
	var numeroDos;
	var suma;

	// origen de datos

	numeroUno = document.getElementById("txtIdNumeroUno"). value;
	numeroDos = document.getElementById("txtIdNumeroDos"). value;

	//conversión a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operacion
	suma = numeroUno + numeroDos;

	//salida de datos
	alert(suma);

}

/*var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	suma = numeroUno + numeroDos;

	alert(suma); */		
