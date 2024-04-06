const Blog = require("./model")

module.exports.getBlogService = async ()=>{
    return await Blog.find().sort({ createdAt: -1 })
}
module.exports.createBlogService = async (data,file)=>{
    console.log(data)
    const newData ={...data,img:`http://localhost:5000/${file.path}`}
    return await Blog.create(newData)
}
module.exports.getSingleBlogService = async (id)=>{
    return await Blog.findOne({_id:id})
}
module.exports.deleteServiceById = async (id)=>{
    console.log(id)
    return await Blog.findByIdAndDelete(id);
}