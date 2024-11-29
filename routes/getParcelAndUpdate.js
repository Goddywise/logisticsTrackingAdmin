const express = require('express');
const router = express.Router();
const db = require('../DB_connnection/db');

router.get("/getdata/:id", (req, res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM shipment WHERE id = ?"
    db.query(sql,[id],(err, result)=>{
        if(err){
            res.status(500).json({err: err.message});
        }else{
            // console.log(result)
            res.status(200).send(result[0]);
        }
    })

})




module.exports = router