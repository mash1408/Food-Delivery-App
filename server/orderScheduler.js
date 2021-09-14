var schedule = require('node-schedule')
const Orders =require('./models/order')
module.exports=async function (orders){
    // for(order in orders){
    //     const time=order.deliveryDate.getHours()*3600 +order.deliveryDate.getMinutes()*60+ order.deliveryDate.getDays()*3600*24
    //     var j = schedule.scheduleJob('*/'+ time+'* * * * *', function(){
    //         const order = await Order.findById(req.params.id)
    //         order.status = "placed"
    //         const updatedOrder = await order.save()
    //       });
    // }
    
}