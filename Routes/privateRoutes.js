const router =require('express').Router()
const verify =require('./verifyJWT')
const Cook =require('../models/Cooks')

router.get('/dashboard',verify,async (req,res)=>{
    // res.json({
    //     welcome:{
    //         message:"welcome to HealthE"
    //     }
    // })
    const cook = await Cook.findOne({
        _id: req.user
    })
    res.send(cook)
})
module.exports= router