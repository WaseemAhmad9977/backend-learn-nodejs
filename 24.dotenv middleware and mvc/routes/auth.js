const router = require('express').Router();

// const {loginController,signupController} = require('../controllers/auth');
const authController= require('../controllers/auth');

const log = require('../middleware/logger');

router.post('/login',authController.loginController);

router.post('/signup',log,authController.signupController);

router.get('/user/:id',authController.getUserController)

module.exports = router;

 