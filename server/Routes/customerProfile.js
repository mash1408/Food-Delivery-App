const router =require('express').Router()
const verifyCustomer =require('./verifyJWTCustomer')
const Customer =require('../models/Customers')
const menu = require('../models/menu')
const Item = require('../models/dishes')
var multer = require('multer');
var upload = multer();

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty({ uploadDir: './Dishes' });

router.get('/dashboard',verifyCustomer,async (req,res)=>{
        // res.json({
        //     welcome:{
        //         message:"welcome to HealthE"
        //     }
        // })
        const customer = await Customer.findOne({
            _id: req.user
        })
        res.send(customer)
})

router.get('/your-items',verifyCustomer,async (req,res)=>{
    const cook = await Cook.findOne({
        _id: req.user
    })
    
    const menuItems= await menu.find({
        cook_id: cook._id
    });
    res.send(menuItems)

})


module.exports= router