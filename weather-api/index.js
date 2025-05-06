const express = require('express');
const dotenv = require('dotenv');
const weatherService = require('./services/weatherService');

dotenv.config();
const app = express();
const PORT = 3000;

app.get('/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: 'Parâmetro "city" é obrigatório' });
    }

    try {
        const data = await weatherService.getWeatherByCity(city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter a previsão do tempo' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});