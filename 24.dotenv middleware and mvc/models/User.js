// const user = [{
//     id: 23,
//     email: 'waseem@78gmail.com',
//     password: '1234'
// },
// {
//     id: '761',
//     email: 'err@gmail.com',
//     password: '3454'
// }
// ]

// module.exports = user

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true    

    },
    password: String,
    marks: {
        type: Number,
        default: 0
    }
    //    age:Number,
    //    hobbies:[string]
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);
