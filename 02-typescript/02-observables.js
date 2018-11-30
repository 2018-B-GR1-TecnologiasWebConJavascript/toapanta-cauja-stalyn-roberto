// 02-observqbles.ts
//las exportaciones e importaciones de archivos es diferente en typescript porque no entiende
var rxjs = require('rxjs');
var numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
console.log(numeros$);
numeros$
    .subscribe(function (ok) {
    console.log("en ok", ok);
}, function (error) {
    console.log("Error", error);
}, function () {
    console.log(" compeltado");
});
