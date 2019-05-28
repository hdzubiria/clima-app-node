const axios = require('axios');

const getLugaralnLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': '85ed46ca11msh3768bef9191b389p1db140jsnabe967b10a11' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion: name,
        lat,
        lng
    }
}


module.exports = {
    getLugaralnLng
}