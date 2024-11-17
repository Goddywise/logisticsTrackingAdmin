const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

router.get("/trace/:searchItem", (req, res)=>{

  const searchItem = req.params.searchItem;
  const sql = 'SELECT * FROM shipment WHERE tracking_number = ?';
  db.query(sql, [searchItem], (err, result) => {
    console.log(result)
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send({ message: 'Shipment not found' });
    }
  });
  })


module.exports = router;
