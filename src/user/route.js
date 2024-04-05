const express = require("express");
const router = express.Router();
router
    .get("/user/register", (req,res)=>{
        res.send({
            message:"hit the backend"
        })
    })
    .get("/user/registers", (req,res)=>{
        res.send({
            message:"hit the backends"
        })
    })
module.exports = router;