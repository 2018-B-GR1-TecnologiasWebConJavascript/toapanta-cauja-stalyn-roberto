declare var Promise;
declare var require: any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const fs = require('fs');

async  function main(){
    const registroTypes = await lerArchivoTypes();
    //console.log(registroTypes.mensaje;
}

function lerArchivoTypes() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('usuarios.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'No se pudo leer el archivo'});
                    } else {
                        resolve({mensaje:'bien'});
                    }
                });
        }
    );
}

main()

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           