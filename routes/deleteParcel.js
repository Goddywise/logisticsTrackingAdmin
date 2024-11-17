const express = require("express");
const router = express.Router();
const db = require("../DB_connnection/db");
// const cors = require("cors")

// Delete endpoint
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM shipment WHERE id = ?";

  db.query(sql, [id], (error, results) => {
    if (error) {
      console.error("Error deleting record:", error);
      return res.status(500).json({ error: "Failed to delete record" });
    }
    console.log(results);
    return res.json({
      message: `The shipment records has been deleted successfully and cannot be recovered`,
      affectedRows: results.affectedRows,
    });
  });
});
module.exports = router;
