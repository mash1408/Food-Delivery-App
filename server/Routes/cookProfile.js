const router =require('express').Router()
const verify =require('./verifyJWTCook')
const verifyCustomer =require('./verifyJWTCustomer')
const Cook =require('../models/Cooks')
const Customer =require('../models/Cooks')
const menu = require('../models/menu')
const fs =require('fs')
const Item = require('../models/dishes')
var multer = require('multer');
var path =require("path")
var upload = multer({ dest: "./Dishes" });

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty({ uploadDir: './Dishes' });

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


router.post('/save-menu-item',[verify,upload.single('files')],async (req,res)=>{
    
    const cook = await Cook.findOne({
        _id: req.user
    })
     console.log(req.file.path)
    fs.rename('./'+ req.file.path,'./Dishes/'+req.body.dishName+'.png',()=>{
       console.log('Dish saved')
    })
    
    
    var newItem = new Item();
    newItem.img.data = fs.readFileSync('./Dishes/'+ req.body.dishName+ '.png')
    newItem.img.contentType = 'image/png';
    newItem.cook =req.user
    await newItem.save();

    // var file = req.files.file;
    const menuItem = new menu({
        dishName: req.body.dishName,
        description: req.body.description,
        price: req.body.price,
        recipe: req.body.recipe,
        cook_id: cook._id
    })
    //const changeStream = menu.watch().on('change', data => console.log(data));
    try{
        fs.readdir('./Dishes', (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join('./Dishes', file), err => {
                if (err) throw err;
              });
            }
          });
        const savedMenuItem= await menuItem.save()
        res.send({
            status: 200,
            dishName: req.body.dishName
        })
        
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete('/delete-menu-item/:dishName',verify,async function (req, res) {
    const dish =await menu.findOne({
        cook_id: req.user,
        dishName: req.params.dishName
    })
    if(!dish){
        res.status(300).send('You are unauthorized to remove this dish')
        return
    }
   
    try{
      await  menu.findOneAndRemove({
                dishName: req.params.dishName
            } ,
                    function (err, dish) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Removed Dish : ", dish);
                }
                });
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