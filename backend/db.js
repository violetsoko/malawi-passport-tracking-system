const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./passport.db");

db.run(`
CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  application_number TEXT,
  full_name TEXT,
  dob TEXT,
  status TEXT,
  office TEXT
)
`);

module.exports = db;

