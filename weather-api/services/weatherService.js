const axios = require('axios');

async function getWeatherByCity(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    return {
        cidade: data.name,
        temperatura: data.main.temp,
        descricao: data.weather[0].description,
        sensacao_termica: data.main.feels_like,
        umidade: data.main.humidity,
    };
}

module.exports = { getWeatherByCity };