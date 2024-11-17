const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const value = [
    req.body.sender_name,
    req.body.receiver_name,
    req.body.package_name,
    req.body.location,
    req.body.date,
    req.body.status,
    req.body.tracking_number,
  ];
  const sql =
    "UPDATE shipment SET 'sender_name'=?, 'receiver_name'=?, 'package_name'=?, 'location'=?, 'date'=?, 'status'=?, 'tracking_number'=? WHERE id=?";

  db.query(sql, [...value, id], (err, data) => {
    if (err) {
      return res.status(500).json({ err: "An error occurred" });
    }
    return res.status(200).json({ data: "Record updatd sucessfully" });
  });
});

module.exports = router;
