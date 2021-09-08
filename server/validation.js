const joi= require('@hapi/joi')

const registerValidation=(data)=>{
    const schema =joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required(),
        phone: joi.string().min(10).required(),
        address: joi.string().min(3).required(),
        password: joi.string().min(6).required()
    })
    return schema.validate(data)
}
const registerValidationCustomer=(data)=>{
    const schema =joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required(),
        phone: joi.string().min(10).required(),
        address: joi.string().min(3).required(),
        password: joi.string().min(6).required()
    })
    return schema.validate(data)
}

const loginValidation=(data)=>{
    const schema =joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.registerValidationCustomer= registerValidationCustomer
module.exports.registerValidation= registerValidation
module.exports.loginValidation= loginValidation
