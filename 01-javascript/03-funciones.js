
holaMundo();

function holaMundo() {
    console.log("Hola Mundo");
}

holaMundo();
console.log(holaMundo());

function sumaDosNumeros(numeroUno, numeroDos) {
    var numeroUnoValido = typeof  numeroUno == "number";
    var numeroDosValido = typeof  numeroDos == "number";
    if(numeroUnoValido && numeroDosValido)
        return numeroUno + numeroDos;
    else {
        console.error("Parametros no son numeros");
        return 0;
    }
}

console.log(sumaDosNumeros(1,2));
console.log(sumaDosNumeros(1,2,3,4,5,6,7));
console.log(sumaDosNumeros(true, [] ,undefined, null,1,2));

function sumarNumeros(...numeros) { // restructuracion de argumentos
    var todosLosNumerosSonValidos = true;
    var suma = 0;
    for (var i = 0; i<numeros.length ;i++){
        var numeroEsValido = typeof numeros[i] == "number";
        if(numeroEsValido)
            suma = suma +numeros[i];
        else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }

    if (todosLosNumerosSonValidos)
        return suma;
    else
        return 0;
}

console.log(sumarNumeros(1,2,3));
console.log(sumarNumeros(1,true,2,3));

function saludar(nombre,funcion) {
    //funcion(nombre);
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("robert",nombreEnMayuscula));
console.log(saludar("robert",nombreEnMinisculas));
console.log(saludar("robert",nombreConPuntoAlFinal));

function nombreEnMayuscula(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinisculas(nombre) {
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre) {
    return nombre+".";
}


saludar("Maria", function (nombre) {
    return nombre+"Toapanta";
});

//tipos de variables

var variable; //nunca mas para definir una varible.
//utilizar la variable let
let variableDos = 2;
variableDos = 3;

const edad = 29; //SIEMPRE QUE PUEDAN usar esta variable.

Const vicente ={
    nombre:"robert"
}

vicente.nombre = "robert";

const Areglo ={1,2};

Areglo[0] = 3;
const  nombre ="hola";
//nombre = "asd";

const casado = true;
//casado = "false";

const hijos = null;
//hijos = 1;

const ganarDinero = function () {
    return 1;
};

/*ganarDinero = function () {
    return 2;
};*/

//NUNCA VAMOS A USAR LAS FUNCIONES ANONIMAS.

const elevarAlCuadrado = function (numero) {
    return numero * numero;
};

//FAT ARROW FUNCTION
const elevarAlCuadrado = (numero) =>{
  return numero * numero;
};

//si se tiene solo una linea de codigo se puede dejar sin llaves
const  elevarAlCuadrado2 = (numero) => numero*numero;
const  elevarAlCuadrado3 = numero => numero*numero;
const restarDosNumeros = (numUno, numDos) => numUno - numDos;







