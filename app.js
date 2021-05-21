 const express = require("express");
 const app = express();
 const path = require('path');
 const fs = require("fs");
 const port = process.env.PORT || 8080;

 app.use('/static', express.static('static'));
 app.use(express.urlencoded())

 app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));


 app.get('/',(eq,res)=>{
     res.status(200).render('index.pug')
 })
 app.post('/',(req,res)=>{
     Name= (req.body).name
     Email= (req.body).email
     Phone= (req.body).phone
     Massege= (req.body).massege
    

     let output = `name of client: ${Name} ,email of clients: ${Email} ,phone number of client: ${Phone} ,massege of client: ${Massege} `

     fs.writeFileSync('form.txt',output);
     const params= {'massage':'your form have been submitted successfully'};
    res.status(200).render('index.pug',params)
 })

 app.listen(port, () =>{
    console.log(`server is running on port:${port}`);
 })