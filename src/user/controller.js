const { signupService, findUserByEmail } = require("./service");

 
 
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
    
   