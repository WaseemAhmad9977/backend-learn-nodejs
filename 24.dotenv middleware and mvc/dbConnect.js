const mongoose = require('mongoose');
const User = require('./models/User');


module.exports = () => {
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
}

