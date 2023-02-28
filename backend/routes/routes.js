const router = require('express').Router();

const signUpAndLogin = require('../Controllers/SignUpAndLogin')
// const checkToken = require('../Controllers/checkToken')


router.post('/signup',signUpAndLogin.signup_post);
router.post('/login',signUpAndLogin.login_post);
    //This is a protected route 

module.exports = router;