const router =require('express').Router()
const verify =require('./verifyJWTCook')
const cook =require('../models/Cooks')
const order =require('../models/order')
const expressAsyncHandler =require('express-async-handler')

  router.post(
    '/',
    verify,
    expressAsyncHandler(async (req, res) => {
      if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const order = new order({
          cook: req.body.orderItems[0].cook,
          orderItems: req.body.orderItems,
          shippingAddress: req.body.shippingAddress,
          paymentMethod: req.body.paymentMethod,
          itemsPrice: req.body.itemsPrice,
          totalPrice: req.body.totalPrice,
          customer: req.customer._id,
          deliveryDate: req.body.deliveryDate,
          isDelivered: req.body.isDelivered,
        });
        const createdOrder = await order.save();
        res
          .status(201)
          .send({ message: 'New Order Created', order: createdOrder });
      }
    })
  );

  router.get(
    '/:id',
    verify,
    expressAsyncHandler(async (req, res) => {
      const order = await order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

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
    verify,
    expressAsyncHandler(async (req, res) => {
      const orders = await order.find({ customer: req.customer._id });
      res.send(orders);
    })
  );

  router.get(
    '/cook/orders',
    verify,
    expressAsyncHandler(async (req, res) => {
      const cook = await cook.findOne({
        _id: req.user
      })
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

