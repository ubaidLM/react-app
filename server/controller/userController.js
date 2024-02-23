import User from '../model/User.js';

const Register = async (req,res)=>{
       const {username,password}=req.body;
       const user = new User({username,password})
        try {
           await user.save();
           res.json({msg:'you are added succesfully'})
        } catch (error) {
            console.log(error)
        }
}

export default Register