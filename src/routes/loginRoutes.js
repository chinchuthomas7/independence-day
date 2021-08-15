const express = require('express');
const loginRouter= express.Router();

loginRouter.post('/',function(req,res){
res.render('index',
{
     name: req.body.name
 });

});
module.exports = loginRouter