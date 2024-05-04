const Blog = require("./model")

module.exports.getBlogService = async (query,page,limit)=>{
    let queryCondition = {};  
    if (query) {
        queryCondition.title = { $regex: `.*${query}.*`, $options: 'i' };
    }
  
    const searchResults = await Blog.find(queryCondition)
    .sort({ createdAt: -1 }) 
    .skip((page - 1) * limit)  
    .limit(limit);  
        const totalCount = await Blog.countDocuments(queryCondition);
        const totalPage = Math.ceil(totalCount / limit);
    console.log(searchResults);
    return {searchResults,totalPage}
}
module.exports.createBlogService = async (data,file)=>{
    console.log(data)
    const newData ={...data,img:`http://localhost:5000/${file.path}`}
    return await Blog.create(newData)
}
module.exports.getSingleBlogService = async (id)=>{
    return await Blog.findOne({_id:id}).populate('author',"name email" ) 
}
module.exports.deleteServiceById = async (id)=>{
    console.log(id)
    return await Blog.findByIdAndDelete(id);
}
module.exports.updateService= async(id,data)=>{
    console.log(data,"why data")
    return await Blog.updateOne({_id:id},{$set:data})
}