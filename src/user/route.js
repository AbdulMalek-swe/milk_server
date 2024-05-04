const express = require("express");
const user = require("./controller");
const { verifyToken } = require("../../middleware/verifytoken");
const router = express.Router();
router
    .post("/signin",user.signup)
    .post("/login",user.signin)
router
.route("/refresh-token").post( user.refreshToken);
router
.route("/veryfi-token").get( verifyToken, user.veryfiTokens);
module.exports = router;