const signupController = async (req, res) => {
    console.log('signupController')
    res.send("signup controller")
}
const loginController = async (req, res) => {
    console.log('loginController');
    res.send("login controller")
}

module.exports = {
    signupController,
    loginController

}