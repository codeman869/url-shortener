'use strict'
const crypto = require('crypto');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

let urlSchema = mongoose.Schema({
    url: String,
    shortenURL: {type: String, unique: true}
    
});


let Url = mongoose.model('Url', urlSchema);

exports.generateUrl = function(url,callback) {
    
    crypto.randomBytes(6, (err,buff) => {
                if(err) throw err;
                
                saveItem(url, buff.toString('base64'), callback);
                
        });
    
    
}

exports.findOne = function(shortenURL, callback) {
    
    let query = {
      shortenURL: shortenURL  
    };
    
    Url.find(query).limit(1).exec((err,res) => {
        
        if(err) return callback(err,null);
        
        callback(null,res);
        
        
    });
    
}

function saveItem(url,shortened,callback) {
     let item = new Url({
        url: url,
        shortenURL: shortened
    });
    
    item.save((err) => {
        if(err) return callback(err,null);
        
        callback(null,item);
        
    });
}
