/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	suma = numeroUno + numeroDos;

	/* se puede hacer asi:
	suma = parseInt (numeroUno) + parseInt (numeroDos) pero asi se transforma en numero solamente para esto
	de la otra manera siempre queda como numero */

	alert("La suma es: " + suma); 		

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    resta = parseInt (numeroUno) - parseInt (numeroDos)

	alert("La resta es: " + resta); 	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	multiplicar = numeroUno * numeroDos;

	alert("La multiplicacion es: " + multiplicar); 	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	dividir = numeroUno / numeroDos;

	alert("La division es: " + dividir); 
}

