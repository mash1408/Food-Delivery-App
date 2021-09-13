const mongoose =require('mongoose')

const cookSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6
    },
    address: {
        type: String,
        required: true,
        min:3,
        max: 255,
    },
    postalCode: {
        type: Number,
        required: true,
        min:6,
        max: 6,
    },
    email:{
        type: String,
        required: true,
        min: 15,
    },
    phone:{
        type: String,
        required: true,
        unique:true,
        min: 10,
        max: 15
    },
    cuisine:{
        type: String,
        required: false,
    },
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    created:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Cooks', cookSchema)