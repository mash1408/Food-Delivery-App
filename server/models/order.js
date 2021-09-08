const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'menu',
          required: true,
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true }
    },
    paymentMethod: { type: String, default: "COD" },
    status: { type: String, default: "order_placed"},
    totalPrice: { type: Number, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers', required: true },
    cook: { type: mongoose.Schema.Types.ObjectID, ref: 'Cooks', required: true },
    deliveryDate: { type: Date },
    isDelivered: { type: Boolean, default: false },
    itemsPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("order", orderSchema);
