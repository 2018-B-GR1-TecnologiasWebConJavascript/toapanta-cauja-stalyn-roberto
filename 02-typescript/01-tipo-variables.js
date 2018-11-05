// 01-tipo-variables.ts
let edad = 13; //escritura de tipo tipado
edad = 25;
edad = 'stalyn';
const nombre = 'Robert';
const casado = false;
let robert = {
    //JSON
    nombre: 'robert'
};
console.log(robert); //nos votara que es un dato undefined porque no esta asignado ningun valor mas que definido las variables y que valores tendra
const numeros = [1, 2, 3, 4];
let variableLocal = '';
variableLocal = false;
let nombre1 = 'robert';
//nombre1 = 13;
//duck typing
let casado1 = false;
casado1 = true;
casado1 = undefined;
//nombre de tipos de definiciones
let robert1 = {
    //JSON
    nombre: 'stalyn',
    apellido: 'roberto'
};
let fechaNacimiento = new Date(); // asio es como se tipa las clases
/*
let Promesa :Promise<number> = () => {
    new Promise(
        (resolve,reject)=>{
            resolve(1);
        }
    );
}
*/
//restructuraciond e parametros tipando.
function saludar(nombre, //requerido
apellido, //opcional
...otrosNombre) {
    return 'hola';
}
;
saludar('robert', 'toapanta');
let respuestaSaludar = saludar('robert', 'toapanta'); //castear una variable
//tipear funciones anonimas
const saludo = (nombre) => {
    return 1;
};
class Usuarios {
    constructor() {
    }
    saludar() {
    }
}
class UsuarioDummy {
}
const robert3 = {
    nombre: 'vicente',
    apellido: 'asdads'
};
