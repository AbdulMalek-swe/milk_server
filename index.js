 
var env = require('dotenv').config();
const mongoose = require('mongoose');
const PORT = 5000;
const app = require('./app');
const { dbConnect } = require('./utils/dbConnect');
 
dbConnect()
 
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`);
})
 