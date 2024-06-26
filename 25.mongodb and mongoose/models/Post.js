const mongoose = require('mongoose');
const postSchema=mongoose.Schema({
    title:String,
    description:String,
    linkedCount:Number,
    user:mongoose.Types.ObjectId
})

module.exports=mongoose.model('post',postSchema)