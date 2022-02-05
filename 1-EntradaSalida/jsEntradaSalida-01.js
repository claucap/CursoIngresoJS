/* ejercicio rompecocos - sabados
La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué cantidad 
de materiales se necesita para la fabricación de distintos juguetes 
AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores

Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S

Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas. Tener en cuenta que los valores de entrada están expresados en Cms.
Ahora necesitamos saber cuánto papel de cada color necesitamos. Las entradas son las mismas.
*/
















/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*function mostrar()
{
	alert("Esto funciona de maravilla");
}*/
/*Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los precios 
y el precio final total más iva(21%), pedir un porcentaje de descuento y aplicarlo al precio final 
, mostrar todos los datos calculados e ingresados ​​por alerta. (solo una alerta en el código). 
Los datos se piden por prompt.
*/

/* ejercicio clase sabado 5/2:

function mostrar () 
{
	//definicion de variables
	
	var nombrePrimerProducto;
	var nombreSegundoProducto;
	var nombreTercerProducto;
	var precioPrimerProducto;
	var precioSegundoProducto;
	var precioTercerProducto;
	var precioBruto;
	var promedioDePrecios;
	var iva;
	var ivaCalculado;
	var precioFinal;
	var porcentajeDeDescuento;
	var descuentoCalculado;
	var precioFinalConDescuento;
	var mensaje;
	
	//entrada de datos

	nombrePrimerProducto = prompt ("ingrese el nombre del primer producto");
	precioPrimerProducto = prompt ("ingrese el precio de " + nombrePrimerProducto);
	precioPrimerProducto = parseFloat(precioPrimerProducto);

	nombreSegundoProducto = prompt ("ingrese el nombre del segundo producto");
	precioSegundoProducto = prompt ("ingrese el precio de " + nombreSegundoProducto);
	precioSegundoProducto = parseFloat (precioSegundoProducto);

	nombreTercerProducto = prompt ("ingrese el nombre del tercer producto");
	precioTercerProducto = prompt ("ingrese el precio de " + nombreTercerProducto);
	precioTercerProducto = parseFloat (precioTercerProducto);

	iva = 21

	porcentajeDeDescuento = prompt ("ingrese el porcentaje de descuento ");
	porcentajeDeDescuento = parseFloat (porcentajeDeDescuento);
	
	//operaciones

	precioBruto = precioPrimerProducto + precioSegundoProducto + precioTercerProducto;

	promedioDePrecios = precioBruto / 3;

	ivaCalculado = (precioBruto/100) * iva;

	precioFinal = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinal/100) * porcentajeDeDescuento;

    precioFinalConDescuento = precioFinal - descuentoCalculado;

	//salida de datos
    
	mensaje = "Los productos con sus precios son: ";
	mensaje = mensaje + nombrePrimerProducto + " $"+ precioPrimerProducto.toFixed(2) + ", ";
	mensaje = mensaje + nombreSegundoProducto + " $" + precioSegundoProducto.toFixed(2) + ", ";
	mensaje = mensaje + nombreTercerProducto + " $" + precioTercerProducto.toFixed(2) + ", ";
    mensaje = mensaje + "el precio bruto totl es $" + precioBruto.toFixed(2) + ", ";
	mensaje = mensaje + "el promedio es $" + promedioDePrecios.toFixed(2) + ", ";
	mensaje = mensaje + "el precio final es $" + precioFinal.toFixed(2)+ "; ";
	mensaje = mensaje + "el precio final con el " + porcentajeDeDescuento + "% de descuento es $" + + precioFinalConDescuento.toFixed(2) + ".";

	alert(mensaje);

}
*/

