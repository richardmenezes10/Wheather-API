# Wheather-API
Desenvolver a API de Clima com Node.js e Express. A ideia é construir uma API backend que consome dados de uma API externa (como a OpenWeather) e retorna informações do clima com base na cidade consultada.


Perfeito! Vamos desenvolver a API de Clima com Node.js e Express. A ideia é construir uma API backend que consome dados de uma API externa (como a OpenWeather) e retorna informações do clima com base na cidade consultada.


---

Resumo da Aplicação

Você faz uma requisição para sua API: GET /weather?city=São Paulo

A API responde com dados do clima da cidade (temperatura, descrição, umidade, etc).



---

Passo a Passo

1. Criar o projeto

mkdir weather-api
cd weather-api
npm init -y

2. Instalar as dependências

npm install express axios dotenv

express: framework web.

axios: para fazer requisições HTTP.

dotenv: para armazenar sua chave da API em variável de ambiente.



---

3. Criar a estrutura do projeto

weather-api/
├── node_modules/
├── .env
├── index.js
├── weatherService.js
├── package.json


---

4. Criar e configurar o arquivo .env

OPENWEATHER_API_KEY=sua_chave_aqui

> Você pode criar uma conta gratuita em https://openweathermap.org/api e pegar a chave da API.




---

5. Criar o arquivo index.js (servidor Express)

const express = require('express');
const dotenv = require('dotenv');
const { getWeatherByCity } = require('./weatherService');

dotenv.config();

const app = express();
const PORT = 3000;

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'Cidade não informada' });

  try {
    const weatherData = await getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o clima' });
  }
});

app.listen(PORT, () => {
  console.log(Servidor rodando em http://localhost:${PORT});
});


---

6. Criar o weatherService.js (lógica para consumir API externa)

const axios = require('axios');

const getWeatherByCity = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br;

  const response = await axios.get(url);
  const data = response.data;

  return {
    cidade: data.name,
    temperatura: data.main.temp,
    descricao: data.weather[0].description,
    umidade: data.main.humidity,
    vento: data.wind.speed,
  };
};

module.exports = { getWeatherByCity };


---

7. Rodar a aplicação

node index.js

Acesse em:
http://localhost:3000/weather?city=Rio de Janeiro


---

Extras que você pode adicionar depois:

Salvar histórico de buscas em um arquivo .json ou banco de dados.

Cache com node-cache ou redis.

Criar documentação da API com Swagger.

Deploy no Railway ou Render.



---

Quer que eu gere esse projeto inicial como um zip com todos os arquivos?