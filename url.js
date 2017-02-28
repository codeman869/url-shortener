'use strict'
const validator = require('url-validator');
const db = require('./db');


exports.shortenURL = (req, res) => {
    
    let url = req.originalUrl.split(/^\/new\//)[1];
    //console.log(url)
    
    let validUrl = validator(url);
    
    if(!validUrl) {
      res.json({
          error: 'Wrong URL format'
      });  
      
      return;
    } 
    
    
    db.generateUrl(url, (err, data) => {
        
        if(err) res.json(err);
        
        console.log(data);
        
        let response = {
          url: data.url,
          shortened: req.protocol + '://' + req.get('host') +'/'+ data.shortenURL
        };
        
        res.json(response);
        
    });
   
    
};

exports.viewURL = (req,res) => {
    
    //console.log(req.originalUrl);
    
    let shortend = req.originalUrl.slice(1);
    
    if (shortend === '')  return res.send('/');
    
    db.findOne(shortend, (err,data) => {
        
        if(err) return res.json(err);
        
        //console.log(data[0].url);
        res.redirect(data[0].url);
        
    });
    
    //res.json(req.originalUrl);
};

