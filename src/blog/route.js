const express = require("express");
const blog = require("./controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifytoken");
const authorization = require("../../middleware/authorization");
const router = express.Router();
router
    .post("/create", upload.single("img"), blog.createBlog)
    .get("/get",blog.getBlog)
router
    .get("/get/:id",blog.getSingleBlog)
    .delete("/delete/:id",  blog.deleteBlog)
    .patch("/update/:id", blog.updateBlog)
module.exports = router;