import {distinct} from "rxjs/operators";

declare var Promise;
declare var require: any;
const rxjs = require('rxjs');
const inquirer = require('inquirer');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const fs = require('fs');

const arregloRespuestaTypes =[
    {
        tipo:'grass',
    },
    {
        tipo:'ground',
    }
];

async function main(): Promise<void> {
    try {
        const registroUsuario = await registrarse();
        console.log(registroUsuario);
    } catch (e) {
        console.log('Error al cargar el programa',e.message);
    }
}

function registrarse() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (!err) {
                        const types = JSON.parse(contenido);

                        const typesObservable = rxjs.of(types);
                        typesObservable
                            .pipe(
                                distinct()
                                map(
                                    (valorActual) => {

                                    }
                                )
                            )
                    .
                        subscribe(
                            (ok) => {
                                console.log("en ok", ok);
                            },
                            (error) => {
                                console.log("Error", error);
                            },
                            () => {
                                console.log(" compeltado");
                            }
                        );
                    } else {
                        reject({mensaje: 'No se pudo leer el archivo'});
                    }
                });
        }
    );
}

main();













