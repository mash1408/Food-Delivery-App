const mongoose =require('mongoose')

const customerSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6
    },
    address: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email:{
        type: String,
        required: true,
        min: 15,
    },
    phone:{
        type: String,
        required: true,
        min: 10,
        max: 15
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