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
	mensaje = mensaje + nombrePrimerProducto + " $"+ precioPrimerProducto + ", ";
	mensaje = mensaje + nombreSegundoProducto + " $" + precioSegundoProducto + ", ";
	mensaje = mensaje + nombreTercerProducto + " $" + precioTercerProducto + ", ";
    mensaje = mensaje + "el precio bruto totl es $" + precioBruto + ", ";
	mensaje = mensaje + "el promedio es $" + promedioDePrecios + ", ";
	mensaje = mensaje + "el precio final es $" + precioFinal + "; ";
	mensaje = mensaje + "el precio final con el " + porcentajeDeDescuento + "% de descuento es $" + + precioFinalConDescuento + ".";

	alert(mensaje);

}



/*
function mostrar() {

	let nombrePrimerProducto;
	let nombreSegundoProducto;
	let nombreTercerProducto;
	let precioPrimerProducto;
	let precioSegundoProducto;
	let precioTercerProducto;
	let precioBruto;
	let promedioDePrecios;
	let precioFinalIva;
	let iva;
	let ivaCalculado;
	let porcentajeDeDescuento;
	let descuentoCalculado;
	let precioFinalIvaConDescuento;
	let mensaje;

	iva = 21;
	nombrePrimerProducto = prompt("Ingrese el nombre del Primer Producto");
	precioPrimerProducto = prompt("Ingrese el Precio de "+nombrePrimerProducto);
	precioPrimerProducto = parseInt(precioPrimerProducto);
	
	nombreSegundoProducto = prompt("Ingrese el nombre del Segundo Producto");
	precioSegundoProducto = prompt("Ingrese el Precio de "+nombreSegundoProducto);
	precioSegundoProducto = parseInt(precioSegundoProducto);

	nombreTercerProducto = prompt("Ingrese el nombre del Tercer Producto");
	precioTercerProducto = prompt("Ingrese el Precio de "+nombreTercerProducto);
	precioTercerProducto = parseInt(precioTercerProducto);

	porcentajeDeDescuento = prompt("Indique el % de Descuento que desea aplicar al precio");
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);//dato que ingresa el usuario y lo usamos para operar

	precioBruto = precioPrimerProducto + precioSegundoProducto + precioTercerProducto;

	promedioDePrecios = precioBruto / 3;

	ivaCalculado = (precioBruto/100)*iva;

	precioFinalIva = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescuento;

	precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + nombrePrimerProducto+" $"+precioPrimerProducto+" ,";
	mensaje = mensaje + nombreSegundoProducto+" $"+precioSegundoProducto+" ,";
	mensaje = mensaje + nombreTercerProducto+" $"+precioTercerProducto+" ,";
	mensaje = mensaje + "Precio Bruto: $"+precioBruto+" ,";
	mensaje = mensaje + "Promedio: $"+promedioDePrecios+" ,";
	mensaje = mensaje + "El Precio Más IVA: $"+precioFinalIva+" ,";
	mensaje = mensaje + "El Precio Final con el"+porcentajeDeDescuento+"% de Descuento: "+precioFinalIvaConDescuento;

	alert(mensaje);


}


*/