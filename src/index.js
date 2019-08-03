const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://github:github@cluster0-em4dj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log('Conectado!');
}).catch((err) => {
    console.log(`Não conectado! Error: ${err}`);
});

app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(3333);