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
       
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (if you have user authentication)
        required: true
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;