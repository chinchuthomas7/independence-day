const express = require('express');
const app = new express(); 
const port = process.env.PORT || 5000;
const loginRouter = require('./src/routes/loginRoutes');

  app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.use('/login',loginRouter);
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views')

app.get('/',function(req,res){
    res.render('form')
})





app.listen(port, ()=>{console.log("server ready at" + port)});