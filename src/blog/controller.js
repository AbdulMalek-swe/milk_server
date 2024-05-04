const { findUserByEmail } = require("../user/service");
const { createBlogService, getBlogService, getSingleBlogService, deleteServiceById, updateService } = require("./service")
   module.exports.createBlog = async (req, res) => {
    try {
      console.log(req.file,"controller ")
      const {email} = req.user;
       
      const user = await findUserByEmail(email);
        const blog = await createBlogService({...req.body,author:user?._id},req.file)
        res.status(200).json({
          message:"succesfully added",
          result:blog
        })
      }
      catch (error) {
        console.log(error.message)
        res.status(401).json({
         error: error.message
        })
      } 
    } 
   module.exports.getBlog = async (req, res) => {
    try {
      console.log(req.query,"my blog query")
      const query = req.query.text; // Assuming 'q' parameter contains search query
    const page = parseInt(req.query.page) || 1; // Page number, default to 1
    const limit = parseInt(req.query.limit) || 5; // Number of results per page, default to 10

      const {totalPage,searchResults} = await getBlogService(query,page,limit)
      res.status(200).json({
        message:"succesfully added",
        result:searchResults,
        totalPage:totalPage
      })
    }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
   module.exports.getSingleBlog = async (req, res) => {
    try {
      const blog = await getSingleBlogService(req.params.id)
      res.status(200).json({
        message:"succesfully added",
        result:blog
      })
    }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    
   module.exports.deleteBlog = async (req, res) => {
    try {
      console.log(req.user)
        const result = await deleteServiceById(req.params.id)
        res.status(200).json({
          message:"succesfully added",
          result:result
        })
      }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    
   module.exports.updateBlog = async (req, res) => {
    try {
      console.log(req.body)
       const result = await updateService(req.params.id,req.body);
       res.status(200).json({
        message:"succesfully added",
        result:result
      })
      }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    