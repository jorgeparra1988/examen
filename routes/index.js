var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', (req,res,next) => {
  res.render('links/signup');
});

router.get('/profile', (req, res, next) => {
  res.render('links/profile');
});



router.get('/signin', (req, res, next) => {
  res.render('links/signin');
});

router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect:'/profile',
    failureRedirect:'/signin',
    failureFlash: true
  })(req, res, next);
});





module.exports = router;
