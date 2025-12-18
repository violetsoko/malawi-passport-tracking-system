const express = require("express");
const cors = require("cors");
const trackRoutes = require("./routes/track");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/track", trackRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

