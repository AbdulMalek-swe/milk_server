const Blog = require("../blog/model");
const { findUserByEmail } = require("../user/service");
const Comment = require("./model");

module.exports.getComments = async(req,res)=>{
    try {
        const postId = req.params.postId;
        const comments = await Comment.find({ blog: postId }).populate('author', 'name');
        console.log(await Comment.find({}));
        res.json(comments);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}
module.exports.postComments = async(req,res)=>{
    try {
        console.log(req.body);
        const { content  } = req.body;
        console.log(content);
        const postId = req.params.postId;
        const {email} = req.user;
        const {_id,name} = await findUserByEmail(email)
        const comment = await Comment.create({ content, author:_id, blog: postId });
        // Push the newly created comment's ID to the post's comments array
        await Blog.findByIdAndUpdate(postId, { $push: { comments: comment._id } });
    
        res.status(201).json(comment);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}
module.exports.deleteComment = async(req,res)=>{
    try {
      const {commentId} = req.params;
        const {author} = await Comment.findById( commentId);
        const {email} = req.user;
        const {_id,name ,role} = await findUserByEmail(email)
        if(role==="admin"||_id===author){
          const comment = await Comment.findByIdAndDelete(commentId);
         return res.status(201).json(comment);
        }
        
        res.status(500).json({ message: err.message });
       
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}
module.exports.updateComment = async(req,res)=>{
    try {
      const {commentId} = req.params;
        const {author} = await Comment.findById( commentId);
        const {email} = req.user;
        const {_id,name ,role} = await findUserByEmail(email)
        if(role==="admin"||_id===author){
          const comment = await Comment.findByIdAndUpdate(commentId,{
       content:req.body.content
          }, { new: true });
         return res.status(201).json(comment);
        }
        
        res.status(500).json({ message: err.message });
       
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}