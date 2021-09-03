const mongoose =require('mongoose')

const ItemSchema=new mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    },{
        timestamps: true
    }
  );
  var Item = mongoose.model('dishes',ItemSchema);
  module.exports =Item;