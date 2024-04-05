const { signupService } = require("./service");

 
 
   module.exports.signup = async (req, res) => {
    try {
        const user = await signupService(req.body);
        //  const token =  await  user.generateConfirmationToken()
        await user.save({validateBeforeSave:false});
          console.log(user)
       
        res.status(200).json({  
          status: "succesfful",
          message: "account create successfully",
          result:user
        });
      }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    
   