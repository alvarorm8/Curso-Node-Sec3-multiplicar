const opts = {
    base: {
        demand: true, //obligatorio introducir la base
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo .txt con la tabla de multiplicar de la base especificada con el límite que se de.', opts)
    .help()
    .argv;


module.exports = {
    argv
}

//Así estaba originalmente
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true, //obligatorio introducir la base
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo .txt con la tabla de multiplicar de la base especificada con el límite que se de.', {
//         base: {
//             demand: true, //obligatorio introducir la base
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;