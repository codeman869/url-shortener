'use strict'
const db = require('./db');

/*
db.findOne('tfVfJ6nL', (err,res)=>{
    
    if(err) return console.warn(err);
    
    console.log(res);
    
});
*/

db.generateUrl('http://www.example.com', (err,res) => {
   
   if(err) return console.log(err);
   
   console.log(res.shortenURL);
    
});