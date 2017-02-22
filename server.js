'use strict'
const express = require('express');
const url = require('./url.js');

let app = express();

app.get('/url/new/:url', url.shortenURL);

app.get('/:url', url.viewURL);

app.listen(process.env.PORT);