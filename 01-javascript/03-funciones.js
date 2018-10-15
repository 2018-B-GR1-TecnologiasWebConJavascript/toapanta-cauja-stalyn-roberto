
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


