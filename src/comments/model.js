const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog', // Reference to the Post model
    required: true
  }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports=Comment