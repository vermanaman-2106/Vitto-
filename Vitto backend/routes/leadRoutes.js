const express = require("express");
const router = express.Router();
const {
  createLead,
  getLead,
} = require("../controllers/leadController");

router.post("/", createLead);
router.get("/:id", getLead);

module.exports = router;