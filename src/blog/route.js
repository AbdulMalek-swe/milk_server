const express = require("express");
const blog = require("./controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifytoken");
const authorization = require("../../middleware/authorization");
const router = express.Router();
router
    .post("/create", verifyToken, upload.single("img"), blog.createBlog)
    .get("/get",blog.getBlog)
router
    .get("/get/:id",blog.getSingleBlog)
    .delete("/delete/:id", verifyToken, blog.deleteBlog)
    .patch("/update/:id",verifyToken, blog.updateBlog)
module.exports = router;