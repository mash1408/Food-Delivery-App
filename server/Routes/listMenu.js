const router =require('express').Router()
const Cook =require('../models/Cooks')
const menu = require('../models/menu')
const fs = require('fs')
const stream = require('stream')
const util =require('util')
const Item = require('../models/dishes')


router.get('/cooks', async(req,res) =>{
    const cookList = await Cook.find({});
    res.send(cookList);
})
router.get('/menu',async (req,res)=>{

    const menuItems= await menu.find({});
    res.send(menuItems)
})

router.get('/menu/cook/:cookid',async (req,res)=>{
    const menuItems= await menu.find({
        cook_id: req.params.cookid
    });
    res.send(menuItems)
})
router.get('/menu/filter/price/:from-:to',async (req,res)=>{
    const menuItems= await menu.find({
        price: { $gte: req.params.from, $lte: req.params.to } 
    });
    res.send(menuItems)
})

router.get('/menu/filter/price/:above',async (req,res)=>{
    let menuItems
    if(req.header('price-above')){
        menuItems= await menu.find({
            price: {  $gte: req.params.above } 
        });
    }
    else{
        menuItems= await menu.find({
            price: {  $lte: req.params.above } 
        });
    }
    
    res.send(menuItems)
})
router.get('/dish',function(req, res) {
    Item.findOne({}, 'img createdAt', function(err, img) {
        if (err)
            res.send(err);
        
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' })
});


router.get('/Dish/:dishName',(req, res) => {
  const path="./Dishes/"
  const r = fs.createReadStream(path+ req.params.dishName+ '.png') // or any other way to get a readable stream
  const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
  stream.pipeline(
   r,
   ps, // <---- this makes a trick with stream error handling
   (err) => {
    if (err) {
      console.log(err) // No such file or any other kind of error
      return res.sendStatus(400); 
    }
  })
  ps.pipe(res) // <---- this makes a trick with stream error handling
})

module.exports =router