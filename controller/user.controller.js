const userModel = require('../model/user.model')
const bcrypt = require('bcrypt');
const { trace } = require('../router/user.router');
const jwt = require('jsonwebtoken')


exports.register = async(req, res) =>{
    try {
        const {userName, email, password} = req.body;
        if(!userName){
            res.status(400).send({msg:"Please fill the user name"})
        }
        if(!email){
            res.status(400).send({msg:"Please fill the email"})
        }
        if(!password){
            res.status(400).send({msg:"Please fill the password"})
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({msg:"User is already exists, Please login"})
        }

        const hashValue = await bcrypt.hash(password, 10)
        const hashPassword = hashValue
        const postUser = await new userModel({
            userName,
            email,
            password: hashPassword
        }).save();

        res.status(201).send({msg:"User register is done", postUser})
        console.log(postUser)

    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
        console.log(error)
    }
}


exports.login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(404).send({msg:"Invalid credentials"})
        }
        const checkUser = await userModel.findOne({email})
        if(!checkUser){
            return res.status(400).send({msg:"User is not found Please login"})
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if(!checkPassword){
            return res.status(400).send({msg:"Invalid credentials"})
        }
        const token = await jwt.sign({_id:checkUser._id}, process.env.JWT_SECRET, {expiresIn:'24h'})

        return res.status(200).send({msg:"Login Successfully", 
            checkUser:{
                _id:checkUser._id,
                userName:checkUser.userName,
                email:checkUser.email
            },
            token
        })

        
    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
        console.log(error)
    }
}

exports.signout = async (req, res) =>{
    try {
        await res.clearCookie('accesstoken')
        res.status(201).send({msg:"Logout is successfull"})
        
    } catch (error) {
        res.status(500).send({msg:"Internal server error"})
        console.log(error)
    }
}




