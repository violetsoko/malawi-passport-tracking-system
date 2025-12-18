const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const { application, dob } = req.query;

  db.get(
    "SELECT status, office FROM applications WHERE application_number=? AND dob=?",
    [application, dob],
    (err, row) => {
      if (!row) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(row);
    }
  );
});

module.exports = router;

