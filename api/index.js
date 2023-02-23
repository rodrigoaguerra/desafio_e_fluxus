const express = require('express');
const bodyParser = require('body-parser');
const valid_password = require('./valid_password');

const cors = require('cors');

const app = express();

// habilita o CORS para todas as solicitações
app.use(cors());

// Configurando o body-parser para suportar apenas application/json
app.use(bodyParser.json());

// definindo as rotas da api
app.get('/', (req, res) => {
    res.send('API Valid Password v1');
});

app.post('/valid_password', valid_password);

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000!');
});
