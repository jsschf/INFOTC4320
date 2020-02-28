const express = require("express");
const router = express.Router();
const animals = require("./animals");

//Below are all CRUD methods

//Read all
router.get("/", (req, res) => res.json(animals));

//Read one
router.get("/:id", (req, res) => {
  const found = animals.some(animal => animal.id === parseInt(req.params.id));

  if (found) {
    res.json(animals.filter(animal => animal.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ Error: `No animal with ID of ${req.params.id}` });
  }
});

module.exports = router;
