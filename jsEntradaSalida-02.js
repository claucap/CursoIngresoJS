/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	let nombre; // declaro la variable nombre - pido lugar para guardar la variable nombre
	nombre = prompt("Ingrese su nombre") ; // inicializacion de variable/asigno el valor, no es necesario dejar espacio luego del igual pero es mas legible
 // se puede tener dos parametros en promt ej nombre=promt ("ingrese", "alan")
	alert(nombre); //muestra lo que tiene guardado nombre

}

