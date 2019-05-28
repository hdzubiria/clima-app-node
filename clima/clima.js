const axios = require('axios');

const getTemperatura = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=12a30494ba0f3d6a648da7eb9659140a&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getTemperatura
}