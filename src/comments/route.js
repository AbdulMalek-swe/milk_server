const express = require("express");
const comment = require("./controller");
const { verifyToken } = require("../../middleware/verifytoken");
 
const router = express.Router();
router
    .get("/:postId/comment", verifyToken,  comment.getComments)
    .post("/:postId/comment", verifyToken,  comment.postComments)
 router
    .delete("/:commentId", verifyToken,  comment.deleteComment)
    .patch("/:commentId", verifyToken,  comment.updateComment)
  
  
module.exports = router;