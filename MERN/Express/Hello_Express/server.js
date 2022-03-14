const express = require("express");
const app = express();
const port = 8000;

// These must be above any get/post code blocks
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json("Hellllloooo worldddd!");
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
