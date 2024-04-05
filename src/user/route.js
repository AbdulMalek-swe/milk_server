const express = require("express");
const user = require("./controller");
const router = express.Router();
router
    .post("/register",user.signup)
    .post("/login",user.signin)
    .get("/getme",user.getme)
     
module.exports = router;