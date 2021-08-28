const router =require('express').Router()
const verify =require('./verifyJWT')
const Cook =require('../models/Cooks')
const menu = require('../models/menu')

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
router.get('/your-items',verify,async (req,res)=>{
    const cook = await Cook.findOne({
        _id: req.user
    })
    const menuItems= await menu.find({
        cook_id: cook._id
    });
    res.send(menuItems)

})
router.post('/save-menu-item',verify,async (req,res)=>{
    const cook = await Cook.findOne({
        _id: req.user
    })
    const menuItem = new menu({
        dishName: req.body.dishName,
        description: req.body.description,
        price: req.body.price,
        recipe: req.body.recipe,
        cook_id: cook._id
    })
    try{
        const savedMenuItem= await menuItem.save()
        res.send({
            status: 200,
            dishName: req.dishName
        })
        
    }
    catch(err){
        res.status(400).send(err)
    }
})
module.exports= router