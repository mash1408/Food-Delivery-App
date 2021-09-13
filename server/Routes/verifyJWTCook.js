const jwt = require('jsonwebtoken')

module.exports=function (req,res,next){
    const token =req.header('auth-token-cook')
    if(!token)
        return res.status(401).send('Unauthorized')
    try{
        const verified = jwt.verify(token, process.env.SECRET_CODE_COOK)
        req.user= verified
        next()
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }
}