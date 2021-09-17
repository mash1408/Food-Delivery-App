const mongoose =require('mongoose')

const menuSchema=new mongoose.Schema({
    dishName:{
        type: String,
        required: true,
        min: 6
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 15
    },
    recipe:{
        type: String,
        required: true
    },
    cook_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cooks'
    },
    // timestamps: true

})

module.exports = mongoose.model('menu', menuSchema)