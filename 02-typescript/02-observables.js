// 02-observqbles.ts
//las exportaciones e importaciones de archivos es diferente en typescript porque no entiende
const rxjs = require('rxjs');
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
console.log(numeros$);
numeros$
    .subscribe((ok) => {
    console.log("en ok", ok);
}, (error) => {
    console.log("Error", error);
}, () => {
    console.log(" compeltado");
});
