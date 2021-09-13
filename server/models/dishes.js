const mongoose =require('mongoose')

const ItemSchema=new mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
        cook: { type: mongoose.Schema.Types.ObjectID, ref: 'Cooks', required: true }
    },{
        timestamps: true
    }
  );
  var Item = mongoose.model('dishes',ItemSchema);
  module.exports =Item;