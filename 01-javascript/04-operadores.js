//Operadores

const Areglo = ['A','B','C'];

const respuesta = Areglo.forEach(
    (valorActualDeLaIteracion,indice,Areglo) =>{
        console.log('valor: ',valorActualDeLaIteracion);
        console.log('indice: ',indice);
        console.log('Areglo: ',Areglo);
    }
);

console.log(respuesta);

Areglo.forEach(v=> console.log(v));

//map MUTA EL AREGLO , CAMBIAR , REASIGNAR NUEVO AREGLO
const respuestaMap = Areglo.map(
    valorActual => valorActual.toLowerCase())
;
console.log(respuestaMap);
console.log(Areglo);

const arregloNumeros = [9,1,5,4,3,7,8,2,6,10];
//OPERAR filter
const respuestaFilter = arregloNumeros.filter(
    valorActual => valorActual > 5
);

console.log(respuestaFilter);

//cuando se pone el 3 igual, pasa a comparar el tipo
if(1 == '1'){
    console.log('Es verdad');
}else{
    console.log('No es verdad');
}

if(0 === ''){
    console.log('Es verdad');
}else{
    console.log('No es verdad');
}

const respuestaFilterConcatenado = arregloNumeros.filter(
    valorActual => valorActual > 5
)
    .map( n => n+1)
    .filter( n =>n >7)
    .forEach( n => console.log(n));

console.log(respuestaFilterConcatenado);

const respuestaFindIndex = arregloNumeros
.findIndex(
    v => v === 7
);

console.log(respuestaFindIndex);
console.log(arregloNumeros.indexOf(7));

// some: al menos uno es verdadero es verdadero

const respuestaSome = arregloNumeros
.some(
  n => n % 11 === 0
);
console.log(respuestaSome);


//every : si incumple uno eso es falso

const respuestaEvery  = arregloNumeros
.every(
  n => n > 2
);

console.log(respuestaEvery);

//reduce
console.log(arregloNumeros);
const respuestaReduce = arregloNumeros
.reduce(
    (valorActualDeLaOperacion, valorActualdelArreglo)=>{
        return valorActualDeLaOperacion + valorActualdelArreglo
    },
    0
);
console.log(respuestaReduce);
const respuestaReduce2 = arregloNumeros
    .reduce(
        (a,b)=> a-b ,
        100
    );

console.log(respuestaReduce2);