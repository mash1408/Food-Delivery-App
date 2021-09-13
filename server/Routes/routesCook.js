const router =require('express').Router()
const Cook =require('../models/Cooks')
const { registerValidation,loginValidation } =require('../validation')
const joi= require('@hapi/joi')
const bcryptjs= require('bcryptjs')
const jwt = require('jsonwebtoken')
const ops = require('./privateRoutes')
var multer = require('multer');
var upload = multer({ dest: "./Dishes" });

router.use('/',ops)

router.post('/register',upload.none(),async (req,res)=>{
       // VALIDATE BEFORE SAVING A USER 
       const {error} = registerValidation(req.body)
    if(error)
        return res.status(400).send(error.details[0].message)
 
    //check if user exists in the database
    const emailExist = await Cook.findOne({
        email: req.body.email
    })
    if(emailExist)
        return res.status(400).send('You are already registered with this email')

    const phoneExist =await Cook.findOne({
        phone: req.body.phone
    });
    if(phoneExist)
    return res.status(400).send('You are already registered with this phone number')
    
    //hash the password from request
    const salt = await bcryptjs.genSalt(10)
    const hashPassPhrase = await bcryptjs.hash(req.body.password, salt)

    const cook = new Cook({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: hashPassPhrase,
        address: req.body.address,
        rating: 0
    })
    
    try{
        const savedCook= await cook.save()
        res.send({
            status: 200,
            name: req.name
        })
        
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/login',upload.none(),async (req,res)=>{
    
    //check if email does  exist
    const cook = await Cook.findOne({
            email: req.body.email
    })

    if(!cook)
        return res.status(400).send('Email or password does not exist')
    
    const password= req.body.password
    const truePassPhrase =await bcryptjs.compare(password, cook.password)
    if(!truePassPhrase)
        return res.status(400).send('Incorrect Password')

    const token= jwt.sign({
        _id: cook.id
    },
    process.env.SECRET_CODE_COOK)
    res.header('auth-token-cook', token).send(token)
})


module.exports =router
