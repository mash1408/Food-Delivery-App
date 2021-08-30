const router =require('express').Router()
const verify =require('./verifyJWT')
const Cook =require('../models/Cooks')
const menu = require('../models/menu')
const fs =require('fs')
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

router.post('/save-menu-item',[verify, multipartyMiddleware],async (req,res)=>{
    const cook = await Cook.findOne({
        _id: req.user
    })
    fs.rename('./'+ req.files.null.path,'./Dishes/'+req.body.dishName+'.png',()=>{
       console.log('Dish saved')
    })
    var file = req.files.file;
    const menuItem = new menu({
        dishName: req.body.dishName,
        description: req.body.description,
        price: req.body.price,
        recipe: req.body.recipe,
        cook_id: cook._id
    })
    //const changeStream = menu.watch().on('change', data => console.log(data));
    try{
        
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