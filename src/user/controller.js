const { generateToken } = require("../../utils/token");
const { signupService, findUserByEmail } = require("./service");
   module.exports.signup = async (req, res) => {
    try {
       
        const user = await signupService(req.body);
        await user.save({validateBeforeSave:false});
        const token =   generateToken(user);
        const { password: pwd, ...others } = user.toObject();
        console.log(token)
        res.status(200).json({  
          status: "succesfful",
          message: "account create successfully",
          accesstoken:token,
          user:others
        });
      }
      catch (error) {
        res.status(401).json({
         error: error.message
        })
      } 
    } 
    module.exports.signin= async (req, res) => {
        try {
            const { email, password } = req.body;
         
            if (!email || !password) {
              return res.status(401).json({ 
                status: "fail",
                error: "Please provide your credentials",
              });
            }
        
            const user = await findUserByEmail(email);
        
            if (!user) {
              return res.status(401).json({
                status: "fail",
                error: "No user found. Please create an account",
              });
            }
            const isPasswordValid = user.comparePassword(password, user.password);
            if (!isPasswordValid) {
              
              return res.status(401).json({
                status: "fail",
                error: "Password is not correct",
              });
            }
           
            const token = generateToken(user);
            const { password: pwd, ...others } = user.toObject();
            res.status(200).json({
              status: "success",
              message: "Successfully logged in",
              token : token,
              data:others
            });
          } catch (error) {
          
            res.status(401).json({
              status: "fail",
              error:error.message
            });
          } 
    };
   module.exports.getme = async(req,res)=>{
    try {
        const user = await findUserByEmail(req?.user?.email);
        const {password:pwd,...other} = user.toObject();
        res.status(200).json({
          status: "succesfful",
          message: "get user all data",
          data: other
        });
      }
      catch (error) {
        res.status(500).json({
          error: error.message
        })
      }
   }