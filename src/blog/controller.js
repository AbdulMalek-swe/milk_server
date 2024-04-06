const { createBlogService, getBlogService, getSingleBlogService, deleteServiceById } = require("./service")

 
   module.exports.createBlog = async (req, res) => {
    try {
        const blog = await createBlogService(req.body)
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
    
   module.exports.getBlog = async (req, res) => {
    try {
      const blog = await getBlogService()
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
       
      }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    