const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
   email:String,
   password:String,
   marks:Number
//    age:Number,
//    hobbies:[string]
})

module.exports=mongoose.model('user',userSchema);