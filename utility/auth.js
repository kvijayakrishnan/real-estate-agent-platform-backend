const {expressjwt} = require("express-jwt")


exports.requireSignIn = expressjwt({
    secret:"login",
    algorithm:['HS256'],
    userProperty:'auth'
})

exports.isAuth = (req, res, nex) =>{
    console.log("Req.Auth", req.auth)
    console.log("Req.userID", req.userID)

    let user = req.auth._id === req.params.userID
    if(!user){
        return res.status(401).send('Access denied')
    }
    next()
}






