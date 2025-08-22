const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    date:String,
    items:Array(any),
    status:Number,
});

const Order = mongoose.model("users",OrderSchema);
module.exports = Order;