const express = require("express");
const user = require("./controller");
const router = express.Router();
router
    .get("/register",user.signup)
     
module.exports = router;