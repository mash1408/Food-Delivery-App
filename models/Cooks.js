const mongoose =require('mongoose')

const cookSchema=new mongoose.Schema({
    chefName:{
        type: String,
        required: true,
        min: 6
    },
    address:{
        type: String,
        required: true,
        min: 15
    },
    age:{
        type: Number,
        required: true,
        min: 15
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

module.exports = mongoose.model('Cooks', cookSchema)