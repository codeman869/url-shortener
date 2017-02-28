'use strict'
const express = require('express');
const url = require('./url.js');

let app = express();

app.get('/new/*', url.shortenURL);

app.get('/favicon.ico', (req, res) => {
   res.sendStatus(204);
});

app.get('/*', url.viewURL);

app.listen(process.env.PORT);