const express = require("express");
const user = require("./controller");
const router = express.Router();
router
    .post("/register",user.signup)
     
module.exports = router;