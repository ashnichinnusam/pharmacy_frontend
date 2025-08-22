const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:Boolean
});

const User = mongoose.model("users",UserSchema);
module.exports = User;