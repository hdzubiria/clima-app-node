const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugaralnLng(argv.direccion);
        const temp = await clima.getTemperatura(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de  ${direccion} `
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);