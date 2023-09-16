const express = require("express");
const People = require("../models/People");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("hello from people controller");
  try {
    res.json(await People.find(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});




// create
router.post("/", async (req, res) => {
try {
  res.json(await People.create(req.body));
} catch (error) {
  res.status(400).json(error);
}
});

// Show
router.get("/:id", async (req, res) => {
try {
  res.json(await People.findById(req.params.id));
} catch (error) {
  res.status(400).json(error);
}
});



router.delete("/:id", async (req, res) => {
try {
  console.log(req.params.id);
  res.json(await People.findByIdAndDelete(req.params.id));
} catch (error) {
  res.status(400).json(error);
}
});

router.put("/:id", async (req, res) => {
try {
  res.json(await People.findByIdAndUpdate(req.params.id, req.body, { new: true }));
} catch (error) {
  res.status(400).json(error);
}
});
module.exports = router;
