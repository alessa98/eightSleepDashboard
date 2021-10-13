const express = require("express");
const controllers = require("../controllers");

const router = express.Router();
router.get("/intervals/:userId", controllers.getUserIntervals);

module.exports = router;
