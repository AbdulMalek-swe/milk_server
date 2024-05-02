const express = require("express");
const user = require("./controller");
const { verifyToken } = require("../../middleware/verifytoken");
const router = express.Router();
router
    .post("/register",user.signup)
    .post("/login",user.signin)
router
.route("/refresh-token").post( user.refreshToken);
module.exports = router;