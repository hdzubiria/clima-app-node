const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}