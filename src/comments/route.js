const express = require("express");
const comment = require("./controller");
const { verifyToken } = require("../../middleware/verifytoken");
 
const router = express.Router();
router
    .get("/:postId/comment", verifyToken,  comment.getComments)
    .post("/:postId/comment", verifyToken,  comment.postComments)
 router
    .delete("/:id", verifyToken,  comment.deleteComment)
  
  
module.exports = router;