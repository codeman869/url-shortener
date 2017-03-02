'use strict'
const express = require('express');
const url = require('./url.js');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname , 'views'));

app.set('view engine', 'pug');

app.use('/scripts', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));

app.get('/new/*', url.shortenURL);

app.get('/favicon.ico', (req, res) => {
   res.sendStatus(204);
});

app.get('/', (req,res) => {
   res.render('index', {
       domain: req.get('host'),
       protocol: req.protocol
   }) 
});

app.get('/*', url.viewURL);


app.listen(process.env.PORT);