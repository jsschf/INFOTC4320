const express = require("express");
const path = require("path");
const animals = require("./animals");

const app = express();

app.get("/api/animals", (req, res) => {
  res.json(animals);
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
