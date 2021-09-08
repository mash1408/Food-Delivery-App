const mongoose =require('mongoose')

const customerSchema=new mongoose.Schema({
    Name:{
        type: String,
        required: true,
        min: 6
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
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

module.exports = mongoose.model('Customers', customerSchema)