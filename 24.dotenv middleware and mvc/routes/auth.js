const router = require('express').Router();

const {loginController,signupController} = require('../controllers/auth');
const log = require('../middleware/logger');

router.post('/login',loginController);

router.post('/signup',log,signupController);

module.exports = router;

 