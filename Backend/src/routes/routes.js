const express = require("express");
const { insertDetails, getDetails } = require("../controller/controller");
const router = express.Router();

router.get("/data", getDetails);
router.post("/data", insertDetails);

module.exports = router;
