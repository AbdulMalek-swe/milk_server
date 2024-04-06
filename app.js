const express = require('express');
const cors = require("cors");
const  userRoute = require('./src/user/route');
const  blogRoute = require('./src/blog/route');
const app = express();
app.use(express.json()); 
app.use(cors())
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
 app.use("/user",userRoute) 
 app.use("/blog",blogRoute) 
module.exports = app; 