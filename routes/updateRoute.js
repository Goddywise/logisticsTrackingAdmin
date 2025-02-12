const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  const value = [
    req.body.sender_name,
    req.body.receiver_name,
    req.body.package_name,
    req.body.location,
    req.body.date,
    req.body.status,

  ];
  const sql =
    "UPDATE shipment SET sender_name = ?, receiver_name = ?, package_name = ?, location = ?, date = ?, status = ? WHERE id = ?";

  db.query(sql, [...value,id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json({ err: "An error occurred" });
    }
    console.log(data)
    return res.status(200).json({ data: "Record updatd sucessfully" });
  });
});

module.exports = router;
