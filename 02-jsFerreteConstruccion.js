/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () //a
{
var largo;
var ancho;
var perimetro;
var cantidadAlambre;

largo = parseFloat (document.getElementById("txtIdLargo").value);
ancho = parseFloat (document.getElementById("txtIdAncho").value);

perimetro = (largo + ancho)*2;
cantidadAlambre = perimetro * 3;

alert ("usted tiene que comprar: " + cantidadAlambre.toFixed(2) + " cantidad de alambre");
}
function Circulo () //b
{
	var radio;
    var circunsferencia;
    var cantidadAlambre;
    const PI = Math.PI;

    radio = parseFloat (document.getElementById("txtIdRadio").value);
    circunsferencia = 2 * PI * radio;
    cantidadAlambre = circunsferencia * 3;

    alert ("usted tiene que comprar: " + cantidadAlambre.toFixed(2) + " cantidad de alambre");


}
function Materiales () //c
{
	const METRO_CUADRADO_CAL = 3;
    const METRO_CUADRADO_CEMENTO = 2;
    var largo;
    var ancho;
    var area ;
    var cantidadBolsasCemento;
    var cantidadBolsasCal;

    largo = parseFloat (document.getElementById("txtIdLargo").value);
    ancho = parseFloat (document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    cantidadBolsasCemento = METRO_CUADRADO_CEMENTO * area;
    cantidadBolsasCal = METRO_CUADRADO_CAL * area;

    alert ("Usted tiene que comprar: " + Math.ceil(cantidadBolsasCal) + " cantidad de bolsas de cal y " + Math.ceil(cantidadBolsasCemento) + " bolsas de cemento");

}