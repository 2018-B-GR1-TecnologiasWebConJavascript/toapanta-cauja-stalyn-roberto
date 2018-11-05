// 01-tipo-variables.ts

let edad:number | string = 13;   //escritura de tipo tipado
edad = 25;
edad = 'stalyn';
const nombre:string = 'Robert';
const casado:boolean = false;
let robert ={
    //JSON
    nombre: 'robert'
};
console.log(robert); //nos votara que es un dato undefined porque no esta asignado ningun valor mas que definido las variables y que valores tendra

const numeros:number[] = [1,2,3,4];

let variableLocal:any = '';
variableLocal = false;

let nombre1 = 'robert';
//nombre1 = 13;

//duck typing
let casado1 = false;
casado1 = true;
casado1 =  undefined;

//nombre de tipos de definiciones
let robert1:{
    //interface
    nombre : string;
    apellido?: string; //definiendo que es una variable opcional del objeto "?";
} = {
    //JSON
    nombre:'stalyn',
    apellido : 'roberto'
};

let fechaNacimiento:Date = new Date(); // asio es como se tipa las clases
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
function saludar(
    nombre:string, //requerido
    apellido?:string,  //opcional
    ...otrosNombre:string[]) //infinito
    :string | number { // return
    return 'hola';
};

saludar('robert','toapanta');

let respuestaSaludar = <number> saludar('robert','toapanta'); //castear una variable


//tipear funciones anonimas
const saludo = (nombre:string):number =>{
   return 1;
};

class Usuarios{
    public edad:string;
    nombre;
    constructor(){

    }

    private saludar(){

    }
}

interface UsuarioInterface{
    nombre:string;
    apellid?:string;
}

class UsuarioDummy{
    nombre:string;
    apellido?:string;
}

const robert3:UsuarioDummy ={
  nombre:'vicente',
    apellido:'asdads'
};




