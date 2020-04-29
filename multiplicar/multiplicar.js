/*
Lo normal en las aplicaciones de node es que la parte
de la lógica esté en un archivo y luego la ejecución
del programa en otro más sencillo, como en cualquier
lenguaje de programación.
*/

// requires

//Hay 3 tipos de requires: 
const fs = require('fs'); //librería ya definida en node sin necesidad de nada mas 
//const fs = require('express'); // No es una librería de node, sino que se instala. Son desarrolladas por otras personas.
//const fs = require('./path_del_fichero'); // Archivos propios desarrollados por nosotros.

const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para la base "${base}" no es un número.`);
            return; //se pone ya que el reject no para la función
        }
        if (!Number(limite)) {
            reject(`El valor introducido para el límite "${limite}" no es un número.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        })
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para la base "${base}" no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para el límite "${limite}" no es un número.`);
            return;
        }

        console.log(`================`.green);
        console.log(`tabla de ${base}`.green);
        console.log(`================`.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
        resolve(`Tabla del ${base} con límite ${limite} listada`)
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

//Ejemplo básico de writeFile
// const data = new Uint8Array(Buffer.from('Hola mundo'));
// fs.writeFile('tabla-2.txt', data, (err) => {
//     if (err) throw err;
//     console.log('El archivo tabla-2.txt ha sido creado.');
// })