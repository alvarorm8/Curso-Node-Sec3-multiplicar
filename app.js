const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv; //importo el objeto que es todo el yargs.js, y dentro de él, quiero el objeto argv
const colors = require('colors');

/*
En js hay varios objetos globales que se crean automáticamente, 
uno de ellos es módulo.
El módulo es un objeto global que se explicará mas adelante.

-exports: parte donde se pueden poner objetos para ser
trabajados de forma global

Otro objeto es process donde se muestra un montón de 
información del sistema, como el usuario que lo corre, etc.
*/
//console.log(multiplicar);
//console.log(process.argv);

/*Aquí tenemos la ejecución de la función crearArchivo
del script multiplicar.js indicando la base*/
//let base = 7;
// crearArchivo(base)
//     .then(archivo => {
//         console.log(`Archivo creado: ${archivo}.`);
//     })
//     .catch(err => console.log(err))

//Aquí se ejecuta la función pasando la base como parámetro por consola
//let argv2 = process.argv;

// let parametro = argv2[2]; //tercera posición, la 1 es la ubicación de node y la 2 la ubicacion del archivo .js que se ejecuta
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => {
//         console.log(`Archivo creado: ${archivo}.`);
//     })
//     .catch(err => console.log(err))

//node app --base=5
/*
Esta manera tiene varios problemas ya que la seguridad
es muy débil. Si yo no indico la base el programa falla,
puedo mandar más parámetros y equivocarme con lo que quería 
hacer, etc.

Para ello existen paquetes que agregan seguridad, crean
documentación, etc.

Este paquete es el llamado yargs.
*/
//node app --limite=15 --base=20
//node app --limite 15 --base 20
/*
Los comandos de arriba simplemente especifican los argumentos,
para llamar a la función debo poner:
node app listar + argumentos:
node app listar -b=5 -l=15
node app listar -b 5 -l 15

node app listar --help
node app --help

Todos los comandos que haya se almacenan en argv._ donde
_ es el objeto donde se almacenan los comandos.
*/

//console.log('Base: ', argv.base);
//console.log('Limite: ', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(mensaje => {
                console.log(`Salida: ${mensaje}.`);
            })
            .catch(err => console.log(err))
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo.red}.`);
            })
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}