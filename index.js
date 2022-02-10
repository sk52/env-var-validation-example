require('dotenv').config();
const express = require('express');
const { validateConfig } = require('./configValidator');

const app = new express();

validateConfig(process.env);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('home route...');
});

app.listen(PORT, () => {
    console.log('App is listening on port ', PORT);
});