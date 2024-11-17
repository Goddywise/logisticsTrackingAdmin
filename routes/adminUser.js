const express = require('express');
const router = express.Router();
const db = require('../DB_connnection/db');

router.post('/login', (req, res)=>{
    value = [
        req.body.username,req.body.password
    ]
    const sql = "SELECT * FROM admin WHERE username = (?) AND password = (?)"; 
    db.query(sql,[...value],(err,data)=>{
        console.log(data);
      if(err){
        return res.json("Error");
      } 
      if(data.length > 0){
        return res.json({messageSuccess:"SuccesString", message:"Login sucessfully!"});
      }else{
        return res.json({errMessage: "Enter your valid username & password!"});
      }
        
    })

})

module.exports = router;