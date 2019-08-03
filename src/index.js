const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://github:github@cluster0-em4dj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log('Conectado!');
}).catch((err) => {
    console.log(`Não conectado! Error: ${err}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3333);