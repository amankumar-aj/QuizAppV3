import User from "../model/User.js";
import jwt from "jsonwebtoken";
const verifyUser=async(req,res)=>{
const {email,password}=req.body;
const user=User.findOne({email});
if(!user || user.password!=password){
    return res.status(401).json({message: "Invalid Credentials"})
} 
const token=jwt.sign();
res.status(200).json(user.email,user.replaceOne,token)
}
export default verifyUser;