/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; 
	nombre = document.getElementById("txtIdNombre").value;
	
	 alert (nombre);
	 //para que no quede el nombre escrito luego q ya lo mostro por alert
	 document.getElementById("txtIdNombre").value ="";

	 /*primero se pide espacio mediante let,  
	 la funcion getelementbyid trae el documento por id. el documento es el html.hay que indicar que documento
	   traer, y asignar a la variable nombre. poner punto y value para que traiga el valor. 
	 y luego se muestra con alert
	 en document. no hay que dejar espacios*/



}


