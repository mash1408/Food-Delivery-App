const router =require('express').Router()
const verify =require('./verifyJWTCook')
const verifyCustomer =require('./verifyJWTCustomer')
const Cook =require('../models/Cooks')
const Customer =require('../models/Customers')
const Menu =require('../models/menu')
const Order =require('../models/order')
const expressAsyncHandler =require('express-async-handler')

  router.post(
    '/',
    verifyCustomer,async (req, res) => {
      
        const dishes =[...req.body.dishes]
        const quantities =[...req.body.quantities]
        
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
        .then(function (datas, err) {
          console.log(datas); // Success
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
    '/:id',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await order.findById(req.params.id);
      if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  router.get(
    '/customer/orders',
    verifyCustomer,
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.user)
      const orders = await order.find({ customer: req.customer });
      res.send(orders);
    })
  );

  router.get(
    '/cook/orders',
    verify,
    expressAsyncHandler(async (req, res) => {
      const cook = await Cook.findById(req.user)
      const orders = await order.find({ cook: cook._id });
      res.send(orders);
    })
  );

  router.put(
    '/:id/accept',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.status = 'accepted';
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Accepted', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  router.put(
    '/:id/preparing',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.status = 'Preparing';
  
        const updatedOrder = await order.save();
        res.send({ message: 'Food is being Cooked', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  router.put(
    '/:id/dispatched',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.status = 'dispatched';
  
        const updatedOrder = await order.save();
        res.send({ message: 'Food is handed over to Delivery Service', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  router.put(
    '/:id/reject',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.status='rejected';
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Rejected', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  router.put(
    '/:id/deliver',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isDelivered = true;
        order.deliveryDate = Date.now();
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
  
  
  module.exports = router;

