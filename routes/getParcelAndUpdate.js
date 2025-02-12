const express = require('express');
const router = express.Router();
const db = require('../DB_connnection/db');

router.get("/getdata/:id", (req, res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM shipment WHERE id = ?";
    db.query(sql,[id], (err, result)=>{
        if (err){
            console.log(err)
            return res.status(404).json({Err: "Error"})
        }
        console.log(result[0])
        return res.send(result[0])
    })
})

module.exports = router;