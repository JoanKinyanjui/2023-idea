const router = require('express').Router();

const signUpAndLogin = require('../Controllers/SignUpAndLogin')


router.post('/signup',signUpAndLogin.signup_post);
router.post('/login',signUpAndLogin.login_post);

module.exports = router;