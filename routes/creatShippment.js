const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

//Creating shippment......
router.post("/create", async(req, res) => {
  const value = [req.body.tracking_number];
  try {
    
    const sql = "SELECT * FROM shipment WHERE tracking_number = (?)";
    db.query(sql, [value], (err, data) => {
      if (err) throw err;
  
      if (data.length > 0) {
          console.log('User with this tracking number already exist')
        return res.status(404).json({
          errorMessage: " User with this Tracking ID already exist",
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
            return res.status(500).json({errorMessage: "An error occured, Shipment was not created..."});
          }else{
            // res.location("/dashboard/admin")
            return res.status(200).json({ successMessage: "Shipment Created Successfully!" });
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
  } catch (e) {
      return res.status(500).json(e, 'Internal Server Error')
  }

});

module.exports = router;
