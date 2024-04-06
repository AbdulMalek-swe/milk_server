const express = require("express");
const blog = require("./controller");
const router = express.Router();
router
    .post("/create",blog.createBlog)
    .get("/get",blog.getBlog)
router
    .get("/get/:id",blog.getSingleBlog)
    .delete("/delete/:id",blog.deleteBlog)
    .patch("/update/:id",blog.updateBlog)
    
     
module.exports = router;