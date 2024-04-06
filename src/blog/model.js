const mongoose = require("mongoose");
 
const blogSchema = mongoose.Schema(
  {
    img: {
        type: String,
        
      },
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      mainContent: {
         type:String
      },
      
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;