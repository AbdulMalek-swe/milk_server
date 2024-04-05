const express = require("express");
const user = require("./controller");
const router = express.Router();
router
    .post("/register",user.signup)
    .post("/login",user.signin)
     
module.exports = router;