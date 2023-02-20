const router = require('express').Router();

const signUpAndLogin = require('../Controllers/SignUpAndLogin')
// const checkToken = require('../Controllers/checkToken')


router.post('/signup',signUpAndLogin.signup_post);
router.post('/login',signUpAndLogin.login_post);
    //This is a protected route 
router.get('/services', signUpAndLogin.checkToken, (req, res) => {
        //verify the JWT token generated for the user
        jwt.verify(req.token,'hae', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });

module.exports = router;