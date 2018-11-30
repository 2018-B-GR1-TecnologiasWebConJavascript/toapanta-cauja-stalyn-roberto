// 01-tipo-variables.ts
var edad = 13; //escritura de tipo tipado
edad = 25;
edad = 'stalyn';
var nombre = 'Robert';
var casado = false;
var robert = {
    //JSON
    nombre: 'robert'
};
console.log(robert); //nos votara que es un dato undefined porque no esta asignado ningun valor mas que definido las variables y que valores tendra
var numeros = [1, 2, 3, 4];
var variableLocal = '';
variableLocal = false;
var nombre1 = 'robert';
//nombre1 = 13;
//duck typing
var casado1 = false;
casado1 = true;
casado1 = undefined;
//nombre de tipos de definiciones
var robert1 = {
    //JSON
    nombre: 'stalyn',
    apellido: 'roberto'
};
var fechaNacimiento = new Date(); // asio es como se tipa las clases
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
apellido) {
    var otrosNombre = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otrosNombre[_i - 2] = arguments[_i];
    }
    return 'hola';
}
;
saludar('robert', 'toapanta');
var respuestaSaludar = saludar('robert', 'toapanta'); //castear una variable
//tipear funciones anonimas
var saludo = function (nombre) {
    return 1;
};
var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    Usuarios.prototype.saludar = function () {
    };
    return Usuarios;
}());
var UsuarioDummy = /** @class */ (function () {
    function UsuarioDummy() {
    }
    return UsuarioDummy;
}());
var robert3 = {
    nombre: 'vicente',
    apellido: 'asdads'
};
