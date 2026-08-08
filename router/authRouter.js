const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const user = require("../models/user")


const router =express.Router();

router.post("/login",async (req,res) => {
    try {
        const {email,password}=req.body
// check fields  
        if (!email || !password
        ) {
            return res.status(400).json({
                message: "Email and Password are you required"
            });
        }

//find user

  const user= await User.findOne({email});

  if (!email){
     return res.status(401).json({
                message: "invalid email or password"
            });
  }


  //password check

  const isMatch =await bcrypt.compare(password, user.password)
 
  if (!isMatch){
     return res.status(401).json({
                message: "invalid password"
            });

  
// USER ID

const token = jwt.sign(
    {
        userId: user_id
    } process.env.JWT_SECRET,{expiredIn:"1h"}
);



//resposive


res.json({
    message:"Login Successful",
    token, user:{
id: user_id,
name: user.name,
email: user.email

    }
});



    } catch(error){
        res.status(500).json({
            message: "server error",
            error: error.message
        })
    }
});

module exports = router;