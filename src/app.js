require('dotenv-safe').config();
const db = require('./database/MongoConfig');
const cors = require('cors');
const express = require('express');

const app = express();

const doacaoRouter = require('./routes/doacaoRoutes');
const hospedagemRouter = require('./routes/hospedagemRoutes');
const livrosRouter = require('./routes/livroRoutes');
const authRouter = require('./routes/authRoutes');
const index = require('./routes/index');

db.connect();

app.use(cors());
app.use(express.json());
app.use('/doacao', doacaoRouter);
app.use('/postos', hospedagemRouter);
app.use('/livros', livrosRouter);
app.use('/login', authRouter);
app.use('/', index);

module.exports = app;