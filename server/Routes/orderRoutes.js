const router =require('express').Router()
const verify =require('./verifyJWTCook')
const verifyCustomer =require('./verifyJWTCustomer')
const Cook =require('../models/Cooks')
const Customer =require('../models/Customers')
const Menu =require('../models/menu')
const Order =require('../models/order')
const expressAsyncHandler =require('express-async-handler')
const orderScheduler =require('../orderScheduler')

  router.post(
    '/',
    verifyCustomer,async (req, res) => {
      
        const dishes =[...req.body.dishes]
        const quantities =[...req.body.quantities]
        const schedule =false
        if("deliveryDate" in req.body)
            schedule =true
        const orders=[]
      
        for(var i=0; i< dishes.length;i++){
          
         const item = await Menu.findOne({dishName: dishes[i]})
         const cook = item.cook_id
          const order={
            dish: item._id,
            price: item.price,
            qty: quantities[i],
            cook: cook._id,
            customer: req.user._id
          }
          orders.push(order)
          
        }
        await Order.insertMany(orders)
        .then(async function (data, err) {
          console.log(data); // Success
          const scheduledOrders=data.map(function(order){
            if(order.status === "scheduled")
              return order
          })
          orderScheduler(scheduledOrders)
          res
          .status(201)
          .send({ message: 'New Order Created'});
      })
        .catch(function (error) {
          console.log(error) // Failure
        })
      }  
  )

  router.delete(
    '/:dishName',
    verifyCustomer,
    expressAsyncHandler(async (req, res) => {
      const dish = await Menu.findOne({dishName: req.params.dishName})
      const order = await Order.findOne({dish: dish._id, customer: req.user});
      let today = new Date();
      const buffer =10
      if(!order)
      res.status(404).send({ message :"No order found" });
      let goAhead= order.createdAt.getHours() == today.getHours() && order.createdAt.getMinutes()+buffer < today.getMinutes() 
      if (goAhead) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
      } else {
        const message =  "Unable to delete order after 10 minutes"
        res.status(404).send({ message });
      }
    })
  );

  router.get(
    '/customer/orders',
    verifyCustomer,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.find({ customer: req.user });
      res.send(orders);
    })
  );

  router.get(
    '/cook/orders',
    verify,
    expressAsyncHandler(async (req, res) => {
      const orders = await order.find({ cook: req.user });
      res.send(orders);
    })
  );

  router.put(
    '/setStatus/:status/:id',
    verify,
    expressAsyncHandler(async (req, res) => {
      if(!(req.params.status in ["placed", "scheduled","accepted","preparing","rejected","delivered"]))
        return res.status(400),json({
          error : "invalid status"
        })
      const order = await Order.findById(req.params.id);
      if (order) {
        order.status = req.params.status;
        if(req.params.status === "rejected"){
          const deleteOrder = await order.remove();
        return res.send({ message: 'Order Removed', order: deleteOrder });
        }
        const updatedOrder = await order.save();
        res.send({ message: 'Order '+ req.params.status, order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );


  
  
  module.exports = router;

