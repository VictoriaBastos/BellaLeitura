const doacaoRouter = require('./routes/doacaoRoutes');
const hospedagemRouter = require('./routes/hospedagemRoutes');

require('dotenv-safe').config();
const db = require('./database/MongoConfig');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/doacao', doacaoRouter);
app.use('/hospedagem', hospedagemRouter)

db.connect();

module.exports = app;