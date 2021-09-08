const router =require('express').Router()
const verify =require('./verifyJWT')
const cook =require('../models/Cooks')
const order =require('../models/order')
import expressAsyncHandler from 'express-async-handler';

  router.post(
    '/',
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

  router.put(
    '/:id/deliver',
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

  router.get(
    '/mine',
    expressAsyncHandler(async (req, res) => {
      const orders = await order.find({ customer: req.customer._id });
      res.send(orders);
    })
  );
  
  module.exports = router;

