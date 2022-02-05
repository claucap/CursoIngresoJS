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
	var nombreUno;
	var nombreDos;
	var nombreTres;
	var precioUno;
	var precioDos;
	var precioTres;
	var precioBruto;
	var promedioDePrecios;
	var impuesto;
	var iva
	var ivaCalculado
	var porcentajeDeDescuento;
	var precioFinal;
	var precioFinalConDescuento;
	var descuento

	nombreUno = prompt ("ingrese el nombre del primer producto");
	precioUno = prompt ("ingrese el precio de " + nombreUno);
	precioUno = parseFloat(precioUno);

	nombreDos = prompt ("ingrese el nombre del primer producto");
	precioDos = prompt ("ingrese el precio de " + nombreDos);
	precioDos = parseFloat (precioDos);

	nombreTres = prompt ("ingrese el nombre del primer producto");
	precioDos = prompt ("ingrese el precio de " + nombreTres);
	precioDos = parseFloat (precioTres);

	descuento = prompt ("ingrese el descuento ")
	descuento = parseFloat (descuento);
	
	precioBruto = precioUno + precioDos + precioTres;
	promedioDePrecios = precioBruto / 3;

	iva = 21;

	ivaCalculado = (precioBruto/100)*iva

    precioFinal = precioBruto + ivaCalculado
  	
	descuento = (precioFinal / 100)* porcentajeDeDescuento;
    precioFinalConDescuento = precioFinal - porcentajeDeDescuento;

	alert(
}

/*
function mostrar() {

	let nombreUno;
	let nombreDos;
	let nombreTres;
	let precioUno;
	let precioDos;
	let precioTres;
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
	nombreUno = prompt("Ingrese el nombre del Primer Producto");
	precioUno = prompt("Ingrese el Precio de "+nombreUno);
	precioUno = parseInt(precioUno);
	
	nombreDos = prompt("Ingrese el nombre del Segundo Producto");
	precioDos = prompt("Ingrese el Precio de "+nombreDos);
	precioDos = parseInt(precioDos);

	nombreTres = prompt("Ingrese el nombre del Tercer Producto");
	precioTres = prompt("Ingrese el Precio de "+nombreTres);
	precioTres = parseInt(precioTres);

	porcentajeDeDescuento = prompt("Indique el % de Descuento que desea aplicar al precio");
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);//dato que ingresa el usuario y lo usamos para operar

	precioBruto = precioUno + precioDos + precioTres;

	promedioDePrecios = precioBruto / 3;

	ivaCalculado = (precioBruto/100)*iva;

	precioFinalIva = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescuento;

	precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + nombreUno+" $"+precioUno+" ,";
	mensaje = mensaje + nombreDos+" $"+precioDos+" ,";
	mensaje = mensaje + nombreTres+" $"+precioTres+" ,";
	mensaje = mensaje + "Precio Bruto: $"+precioBruto+" ,";
	mensaje = mensaje + "Promedio: $"+promedioDePrecios+" ,";
	mensaje = mensaje + "El Precio Más IVA: $"+precioFinalIva+" ,";
	mensaje = mensaje + "El Precio Final con el"+porcentajeDeDescuento+"% de Descuento: "+precioFinalIvaConDescuento;

	alert(mensaje);


}


*/