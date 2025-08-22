const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    Price:Number,
    images:Array(String),
});

const Product = mongoose.model("users",ProductSchemaSchema);
module.exports = Product;