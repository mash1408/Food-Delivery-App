const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Cook= require('./Routes/routesCook')
const Customer= require('./Routes/routesCustomer')
const menu =require('./Routes/listMenu')
var schedule = require('node-schedule')
const bodyParser=require('body-parser')
const cors = require('cors')
const order = require('./Routes/orderRoutes')


dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
},

()=>{

    console.log('connected to DB')
}
)
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//MiddleWares
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

//Middleware for auth
app.use(cors(corsOptions))
app.use('/cook', Cook)
app.use('/customer', Customer)
app.use('/home', menu)
app.use('/order', order)


// var j = schedule.scheduleJob('5 * * * * *', function(){
//     console.log('The world is going to end today.');
//     // once the job is finished remove the database entry mark it as completed so that it won't run again
//   });

app.listen(3005, () => {
  console.log("app is running ");
});
