const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
    userId :{type: Schema.Types.ObjectId,ref:"Users"},
    productId : Array(String)
});

const Cart = mongoose.model("users",CartSchema);
module.exports = Cart;