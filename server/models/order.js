const mongoose = require("mongoose");
const Customer = require("./Customers");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  { 
    dish: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'menu',
      required: true,
    },
    qty: { type: Number, required: true },
    shippingAddress: {
      address: { type: String  },
      postalCode: { type: String  }
    },
    paymentMethod: { type: String, default: "COD" },
    status: { type: String,required: true, enum:["placed", "scheduled"], default: function(){
        if(!this.deliveryDate)
          return "placed"
        else 
          return "scheduled"
    }},
    price: { type: Number, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers', required: true },
    cook: { type: mongoose.Schema.Types.ObjectID, ref: 'Cooks', required: true },
    deliveryDate: { type: Date },
    isDelivered: { type: Boolean, default: false}
  },
  {
    timestamps: true,
  }
);


orderSchema.post('insertMany',async function(res) {
  console.log(res.length)
  for(var i=0;i< res.length;i++){
    const customer =await Customer.findById(res[i].customer)
   res[i].shippingAddress.postalCode = customer.postalCode
   res[i].shippingAddress.address = customer.address
  }
 
  
})
module.exports = mongoose.model("order", orderSchema);
