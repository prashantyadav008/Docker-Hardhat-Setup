const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: true, message: "Hello Docker" });
});

PORT = 9000;

app.listen(PORT, () => {
  console.log(`Use link to show your data http://localhost:${PORT}/`);
});
