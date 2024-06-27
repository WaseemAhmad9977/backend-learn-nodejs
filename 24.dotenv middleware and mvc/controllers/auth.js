const User = require('../models/User');



const signupController = async (req, res) => {

    console.log('signupController')
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send('email and password required')
        return;
    }

    //already present:logic -- home work

    const user = await User.findOne({ email });
    if (user) {
        res.send('user already present');
        return;
    }


    // const id = Math.floor(Math.random() * 1000);
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(200).json(newUser)

}
const loginController = async (req, res) => {

    console.log('loginController');

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send('email and password required')
        return;
    }

    // const user = User.find(item => item.email === email);
    const user = await User.findOne({ email });




    if (!user) {
        res.status(404).send('user not found')
        return;
    }
    if (user.password !== password) {
        res.status(401).send('incorrect password')
        return;
    }

    res.status(200).send({
        email: user.email,

    })

}

const getUserController = (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.send('id is required');
        return;
    }

    const user = User.find(item => item.id == id);
    res.status(200).json(user)
}

module.exports = {
    signupController,
    loginController,
    getUserController
}