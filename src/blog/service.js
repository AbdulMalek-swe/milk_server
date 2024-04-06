const Blog = require("./model")

module.exports.getBlogService = async ()=>{
    return await Blog.find().sort({ createdAt: 1 })
}
module.exports.createBlogService = async (data)=>{
    return await Blog.create(data)
}
module.exports.getSingleBlogService = async (id)=>{
    return await Blog.findOne({_id:id})
}
module.exports.deleteServiceById = async (id)=>{
    console.log(id)
    return await Blog.findByIdAndDelete(id);
}