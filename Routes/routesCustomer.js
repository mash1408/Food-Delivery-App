const router =require('express').Router()
const Customer =require('../models/Customers')
const { registerValidationCustomer,loginValidation } =require('../validation')
const joi= require('@hapi/joi')
const bcryptjs= require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register',async (req,res)=>{
       // VALIDATE BEFORE SAVING A USER 
       const {error} = registerValidationCustomer(req.body)
    if(error)
        return res.status(400).send(error.details[0].message)
        
    //check if user exists in the database
    const emailExist = await Customer.findOne({
        email: req.body.email
    })
    if(emailExist)
        return res.status(400).send('You are already registered-Email exists')
        
    //hash the password from request
    const salt = await bcryptjs.genSalt(10)
    const hashPassPhrase = await bcryptjs.hash(req.body.password, salt)

       const customer = new Customer({
        Name: req.body.Name,
        email: req.body.email,
        password: hashPassPhrase
    })
    
    try{
        const savedCustomer= await customer.save()
        console.log(savedCustomer)
        res.send({
            status: 200,
            Name: req.Name
        })
        
    }
    catch(err){
        res.status(400).send(err)
       
    }
})

router.post('/login',async (req,res)=>{
   
    
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