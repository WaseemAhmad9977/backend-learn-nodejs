const user = require('../models/User');
const users = require('../models/User')


const signupController = async (req, res) => {

    console.log('signupController')
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send('email and password required')
        return;
    }

    //already present:logic -- home work


    const id = Math.floor(Math.random() * 1000);
    users.push({
        id,
        email,
        password
    })

    res.status(200).json({
        id
    })

}
const loginController = async (req, res) => {
    console.log('loginController');

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(403).send('email and password required')
        return;
    }

    const user = users.find(item=>item.email === email);
    
    if(!user){
        res.status(404).send('user not found')
        return;
    }
    if(user.password!== password){
        res.status(401).send('incorrect password')
        return;
    }

    res.status(200).send(user)
    
}

const getUserController = (req,res)=>{
    const id = req.params.id;

    if(!id){
        res.send('id is required');
        return;
    }

    const user = users.find(item=>item.id == id);
    res.status(200).json(user)
}

module.exports = {
    signupController,
    loginController,
    getUserController
}