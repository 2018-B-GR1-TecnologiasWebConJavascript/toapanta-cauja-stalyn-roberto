arreglo = [
    1,
    "Adrian",
    false,
    null,
    new Date(),
    {
        nombre: "Vicente"
    },
    [1, 2, false, true]
];

console.log(arreglo[3]);

var aregloNUmeros = [1, 2, 3];

//agregar un elemento al final del areglo 1ra forma
aregloNUmeros.push(4);

console.log(aregloNUmeros);

//borrar el item del final del areglo
aregloNUmeros.pop();

console.log(aregloNUmeros);

//eliminar el numero de item a patir de la posicion
aregloNUmeros.splice(0, 2);
console.log(aregloNUmeros);

//modificar ese item de la ubicaicon del areglo 1 posicion, 2 cantidad a eliminar, 3 que vamos agregar
aregloNUmeros.splice(1, 0, 4);
console.log(aregloNUmeros);

//modificar ese item de la ubicaicon del areglo 1 posicion, 2 cantidad a eliminar, 3 que vamos agregar
aregloNUmeros.splice(2, 0, 8);
console.log(aregloNUmeros);

//modificar ese item de la ubicaicon del areglo 1 posicion, 2 cantidad a eliminar, 3 que vamos agregar
aregloNUmeros.splice(3, 0, 5, 6, 7, 8, 9, 10);
console.log(aregloNUmeros);

var indicceNUmeroSeis = aregloNUmeros.indexOf(6);
aregloNUmeros.splice(indicceNUmeroSeis, 1);
console.log(aregloNUmeros);

var aregloUNo = aregloNUmeros.slice(0, aregloNUmeros.length / 2);
var aregloDos = aregloNUmeros.slice(aregloNUmeros.length / 2, aregloNUmeros.size);

console.log(aregloUNo);
console.log(aregloDos);

var aregloUnoDos = [1, 2];
var aregloSeis = [6];

//restructuracion de areglos
var aregloTotal = [...aregloUnoDos
    ,...aregloUNo
    ,...aregloSeis
    ,...aregloDos];

aregloTotal.splice(aregloTotal.length,0,11,12,13,14,15,16,17,18,19,20);
aregloTotal.splice(aregloTotal.length,0,...aregloTotal);
console.log(aregloTotal);



