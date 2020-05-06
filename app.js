const { crearArchivo, listar } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listar(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}