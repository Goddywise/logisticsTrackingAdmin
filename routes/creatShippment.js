const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

//Creating shippment......
router.post("/create", (req, res) => {
  const value = [req.body.tracking_number];
  const sql = "SELECT * FROM shipment WHERE tracking_number = (?)";
  db.query(sql, [value], (err, data) => {
    if (err) throw err;

    if (data.length > 0) {
        console.log('User with this tracking number already exist')
      return res.status(404).json({
        messageErr: " User with this  Tracking ID already exist",
      });
    } else {
      const sql2 =
        "INSERT INTO shipment (sender_name, receiver_name, package_name, location, date, status, tracking_number) VALUES(?)";

      const values = [
        req.body.sender_name,
        req.body.receiver_name,
        req.body.package,
        req.body.location,
        req.body.date,
        req.body.status,
        req.body.tracking_number,
      ];
      db.query(sql2, [values], (err, data) => {
        console.log(data);
        if(err){
          return res.status(500).json(err);
        }else{
          // res.location("/dashboard/admin")
          return res.status(200).json({ message: "Shipment Created Successfully!" });
        } 
        // else {
        //   return res.status(500).json({
        //     errMessage:
        //       "An error occur, shipment wasn't created! user already exist",
        //   });
        // }
      });
    }
  });
});

module.exports = router;
