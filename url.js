'use strict'
const validator = require('url-validator');

exports.shortenURL = (req, res) => {
    let url = validator(req.params.url);
    
    if(!url) {
      res.json({
          error: 'Wrong URL format'
      });  
    } 
    
    
    
};

exports.viewURL = (req,res) => {
    
};