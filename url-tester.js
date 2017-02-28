'use strict'
const crypto = require('crypto');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/urls');

let urlSchema = mongoose.Schema({
    url: String,
    shortenURL: {type: String, unique: true}
    
});


let Url = mongoose.model('Url', urlSchema);

crypto.randomBytes(6, (err,buff) => {
                if(err) throw err;
    
                //return buff.toString('base64');
                
                saveItem('http://www.facebook.com', buff.toString('base64'));
                
        });



function saveItem(url, shortened) {

    let item = new Url({
        url: url,
        shortenURL: shortened
    });
    
    item.save((err) => {
        if(err) return console.log(err);
        
        findMany();
    });
    
}


function findMany() {
    let query = Url.find({}).exec(displayResults);
}

function displayResults(err,res) {
    if(err) return console.log(err);
    
    res.forEach((r) => {
       console.log(r); 
    });
}





