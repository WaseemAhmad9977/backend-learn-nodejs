const mongoose = require('mongoose');
const User = require('./models/User')

const mongoUri = "mongodb+srv://waseemahmad9977:MKsZ5JUPwk15Vejz@cluster0.wcsmyrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb connected");
    } catch (e) {
        console.error("Error connecting to mongodb:", e);
    }
}


connectToDatabase();







// async function createUser(newUser) {

//     // const user = new User({
//     //     email:'err@9977gmail.com',
//     //     password:'12443',
//     // })

//     const user = new User(newUser) // in memory user document created

//     // user.save().then((data)=>{
//     //     console.log("user added");
//     // })

//     const data = await user.save(); //user saved inside database
//     console.log('user', data);
//     console.log("data", data);


// }

// createUser({
//     email: 'prince@gmail.com',
//     password: '2345',
//     marks: 49

// })

// async function findUser() {

//     // const users = await User.findById('667a8c3fad139b0d9f06ea97');
//     // const users = await User.find({ email: 'prince@999gmail.com' });
//     // const user = await User.findOne({ email: 'prince@999gmail.com' })
//     // const user = await User.findOne({ marks: { $gt: 49 } })
//     const user = await User.find({ email: { $regex: 'u' } })
//     console.log(user);
//     return user;


// }

// findUser();

// async function updateMarks(userId, marks) {

//     const user = await User.findById(userId);
//     user.marks = marks;
//     const updateUser = await user.save()
//     console.log(updateUser);
// }

// updateMarks('667becd178cc746a7b497926', 56)

// async function deleteUser(UserId) {
//     const user = await User.findById(UserId);
//     await user.deleteOne();
//     console.log('user has been deleted');
// }

// deleteUser('667becd178cc746a7b497926')

async function CreateUser(newUser) {
    // const user = new User({
    //     email:'waseem@gmail.com',
    //     password:123,
    //     marks:25
    // })

    // user.save().then((data)=>{
    //     console.log(data);
    // })

    const user = new User(newUser);
    const data = await user.save();
    console.log(data);


}

// CreateUser({
//     email: 'anurag@gmail.com',
//     password: 1233,
//     marks: 88

// });

// async function findUser() {
//     // const user = await User.findById(userId);
//     // const user = await User.findOne({ marks: { $gt: 19 } })
//     // const user = await User.findOne({ marks: { $lt: 49 } })
//     // const user = await User.findOne({ email: { $regex: 'u' } })
//     // console.log(user)
// }

// findUser()


async function deleteUser(UserId) {
    const user = await User.findById(UserId);
    if (!user) return;
    await user.deleteOne();
    console.log('user is deleted')
}

deleteUser('667c00b464dfccdb1b0e1bf9')

