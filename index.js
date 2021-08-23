const express =require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Cook= require('./Routes/routesCook')
const Customer= require('./Routes/routesCustomer')

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },

()=>{

    console.log('connected to DB')
}
)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//MiddleWares
app.use(express.json())


//Middleware for authentification
app.use('/cook', Cook)
app.use('/customer', Customer)






app.listen(3000 , () =>{
    console.log('app is running ')
})
