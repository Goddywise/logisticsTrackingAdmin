const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");

router.post("/login", async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;

    const sql = "SELECT * FROM admin WHERE username = (?)";
    await db.query(sql, [email], (err, result) => {
      if (result.length > 0) {
         const originalPassword = result[0].password;
        // console.log(result, ...originalPassword);
           if (originalPassword) {
          // console.log(result)
             return res.status(202).json({messageSuccess: "SuccesString", message: "Login sucessfully!",
             });
           } else {
             return res.status(401).json({ errMessage: "Password do not match..." });
            }
      } else {
        return res.status(404).json({ err, errMessage: " Invalid Username...\n Check and try again...",
        });
      }
    });
  } catch (e) {
    console.log(e, "Internal Server Error");
  }
});

module.exports = router;
