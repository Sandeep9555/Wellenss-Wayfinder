require('dotenv').config()
const userMode = require("../models/userModel");
const emailValidator = require("email-validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { firstName, lastName , email, password } = req.body;
    console.log(firstName, lastName, email, password);
    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const validEmail = emailValidator.validate(email);
        if (!validEmail) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address 📩"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userInfo = new userMode({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const result = await userInfo.save();
        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists"
            });
        }
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }
  
    try {
      const user = await userMode.findOne({ email }).select("+password");
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials"
        });
      }
  
      // Generate JWT token using user model method
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
      });
  
      user.password = undefined;
  
      const cookieOption = {
        maxAge: 24 * 60 * 60 * 1000, // 24hr
        httpOnly: true // Not able to modify the cookie in the client side
      };
  
      res.cookie("token", token, cookieOption);
      res.status(200).json({
        success: true,
        token: token,
        data: { firstName: user.firstName, lastName: user.lastName, email: user.email },
        id: user._id.toString()
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message
      });
    }
  };
  
const logout = (req,res,next)=>{
    try {
        const cookieOption = {
          expires: new Date(), // current expiry date
          httpOnly: true //  not able to modify  the cookie in client side
        };
    
        // return response with cookie without token
        res.cookie("token", null, cookieOption);
        res.status(200).json({
          success: true,
          message: "Logged Out"
        });
      } catch (error) {
        res.stats(400).json({
          success: false,
          message: error.message
        });
      }

  }

module.exports = {
    signup,
    signin,
    logout
};
