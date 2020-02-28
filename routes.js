const express = require("express");
const router = express.Router();
const animals = require("./animals");

//Below are all CRUD methods

//--------------------------CREATE--------------------------
router.post("/", (req, res) => {
  const addAnimal = {
    id: animals.length + 1,
    name: req.body.name,
    type: req.body.type
  };

  if (!addAnimal.name || !addAnimal.type) {
    return res
      .status(400)
      .json({ Error: "Make sure to include name and type fields" });
  }

  animals.push(addAnimal);
  res.json(animals);
});

//--------------------------READ ALL--------------------------
router.get("/", (req, res) => res.json(animals));

//--------------------------READ ONE--------------------------
router.get("/:id", (req, res) => {
  const found = animals.some(animal => animal.id === parseInt(req.params.id));

  if (found) {
    res.json(animals.filter(animal => animal.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ Error: `No animal with ID of ${req.params.id}` });
  }
});

//--------------------------UPDATE--------------------------
router.put("/:id", (req, res) => {
  const found = animals.some(animal => animal.id === parseInt(req.params.id));

  if (found) {
    const update = req.body;
    animals.forEach(animal => {
      if (animal.id === parseInt(req.params.id)) {
        animal.name = update.name ? update.name : animal.name;
        animal.type = update.type ? update.type : animal.type;

        res.json({ Info: "Animal info has been updated", animal });
      }
    });
    res.json(animals.filter(animal => animal.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ Error: `No animal with ID of ${req.params.id}` });
  }
});

//--------------------------DELETE--------------------------
router.delete("/:id", (req, res) => {
  const found = animals.some(animal => animal.id === parseInt(req.params.id));

  if (found) {
    res.json({
      Info: "Animal deleted from array",
      animals: animals.filter(animal => animal.id !== parseInt(req.params.id))
    });
    const id = parseInt(req.params.id);
    animals.splice(id - 1, 1);
  } else {
    res.status(400).json({ Error: `No animal with ID of ${req.params.id}` });
  }
});

module.exports = router;
