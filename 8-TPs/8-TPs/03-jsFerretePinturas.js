    /*3.	Para el departamento de Pinturas:
    A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
    B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
    */
    function FahrenheitCentigrados () 
    {
        //declaracion de variables

        var gradosFahrenheit;
        var gradosCentigrados;

        //origen de datos
        
        gradosFahrenheit = document.getElementById("txtIdTemperatura").value;

        //conversión a número

        gradosFahrenheit = parseFloat(gradosFahrenheit);

        // operacion

        gradosCentigrados = (gradosFahrenheit - 32) * 5 / 9;

        //salida de datos

        alert(gradosFahrenheit + " grados Fahrenheit son " + gradosCentigrados.toFixed(2) + " grados centigrados");

    }

    function CentigradosFahrenheit () 
    {
        //declaracion de variables

        var gradosFahrenheit;
        var gradosCentigrados;

        //origen de datos
        
        gradosCentigrados = document.getElementById("txtIdTemperatura").value;

        //conversión a número

        gradosCentigrados = parseFloat(gradosCentigrados);

        // operacion
    
        gradosFahrenheit = (gradosCentigrados * 9 / 5) + 32;

        //salida de datos

        alert(gradosCentigrados + " grados Centigrados son " + gradosFahrenheit.toFixed(2) + " grados Fahrenheit");
    }
