const fs = require('fs');

let listar = (base, limite = 10) => {
    let result = '';

    for (let i = 0; i <= limite; i++) {
        result += `${base} * ${i} = ${base * i}\n`
    }

    console.log(result);
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let result = '';

        for (let i = 0; i <= limite; i++) {
            result += (`${i} * ${base} = ${i*base}\n `);
        }

        fs.writeFile(`Tablasdemultiplicar/tabla del ${base} hasta el ${limite}`, result, 'utf8', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    });
}

// Se exportan las funciones que tenga dentro
module.exports = {
    crearArchivo,
    listar
}