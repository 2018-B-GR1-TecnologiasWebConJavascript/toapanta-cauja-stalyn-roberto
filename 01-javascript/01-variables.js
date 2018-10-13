var holamundo = "hola mundo"
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var datto;
var fechaNacimiento = new Date();
var robert = {
    "nombre":"Stalyn",
    'segundoNombre':"Robert",
    apellidoPaterno : `toapanta`,
    edad: 14,
    casado : false,
    hijo : null,
    mascotas : {
        nombre : "Lulu",
        edad : 2
    }
}; //objectº

console.log("HOLA MUNDO");
console.log("edad", typeof edad);  //number
console.log("edadString", typeof edadString); //string
console.log("sueldo", typeof sueldo); //number
console.log("casado", typeof casado); //boolean
console.log("hijos", typeof hijos); //object
console.log("dato tipo", typeof datto); //undefined
console.log("dato valor",datto); //undefined
console.log("fecha",typeof fechaNacimiento); //object

console.log(robert.mascotas.nombre);
console.log(robert);

delete robert.hijo;
console.log(robert);

robert.hija ={
    nombre: "asd"
};
console.log(robert);
//console.log(robert.abuelo.nombre);

if(true){
    console.log("SI");
}else{
    console.log("NO");
}

if(false){
    console.log("SI");
}else{
    console.log("NO");
}

if(1){ //truthy
    console.log("SI");
}else{
    console.log("NO");
}

if(0){ //falsy
    console.log("SI");
}else{
    console.log("NO");
}

if(-1){ //truthy
    console.log("SI");
}else{
    console.log("NO");
}

if(""){ //falsy
    console.log("SI");
}else{
    console.log("NO");
}
if("a"){ //truthy
    console.log("SI");
}else{
    console.log("NO");
}
if(null){ //falsy
    console.log("SI");
}else{
    console.log("NO");
}

if({nombre:"robert"}){ //truthy
    console.log("SI");
}else{
    console.log("NO");
}

if(new Date()){ //truthy
    console.log("SI");
}else{
    console.log("NO");
}

if(undefined){ //falsy
    console.log("SI");
}else{
    console.log("NO");
}