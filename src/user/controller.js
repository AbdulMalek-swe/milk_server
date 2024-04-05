 
 
   module.exports.signup = async (req, res) => {
       try {
        res.status(200).json({
            message:"successfull",
            result:{
                token:"token for auth",
                result:req.body,
            }
        })
       } catch (error) {
        res.status(401).json({
            error:error.message
        })
       }
   } 
   