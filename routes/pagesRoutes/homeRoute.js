const express = require('express');
const router = express.Router();
const {readFile} = require('fs');

router.get('/',(req,res)=>{

    const home = new Promise((resolve,rejects)=>{
        readFile('./public/views/index.html','utf-8',(err,data)=>{
            if(err) rejects(err);
            resolve(data);
        })
    })

    Promise.allSettled([home]).then(values =>{
        res.setHeader('Content-type','text/html');
        res.status(200).send(values[0].value);
    })
})
       
module.exports=router;