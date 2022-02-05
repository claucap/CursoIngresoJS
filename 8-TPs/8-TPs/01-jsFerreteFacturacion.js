/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () //a
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioUno").value);

    
    suma = precioUno + precioDos + precioTres;

    alert(suma);

}

function Promedio () //b
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioUno").value);

    
    promedio = (precioUno + precioDos + precioTres)/3;
    

    alert(promedio.toFixed(2));
}
function PrecioFinal () //c
{
	var precioUno;
    var precioDos;
    var precioTres;
    var impuesto;
    var precioFinal;
    var suma;
    const IVA = 21 / 100;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioUno").value);

    suma = precioUno + precioDos + precioTres;
    impuesto = suma * IVA;
    precioFinal = suma + impuesto
   
   // precioFinal = suma*1.21;

    alert(precioFinal.toFixed(2));
}