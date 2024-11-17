const express = require('express');
const router = express.Router();
const db = require('../DB_connnection/db');

//Get all shippment records......
router.get("/getrecords",(req, res)=>{
    const sql = "SELECT * FROM shipment"
    db.query(sql, (err, data)=>{
        if (err){
            return res.json({Err: "Error"})
        }
        // console.log({data})
        return res.send({data})
    })
})


module.exports = router;