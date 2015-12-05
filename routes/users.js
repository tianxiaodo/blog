var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('首页');
});
router.get('/reg', function(req, res, next) {
  res.render("user/reg");
});
router.get('/login', function(req, res, next) {
  res.render("user/login");
});

router.post('/login', function(req, res, next) {
  var user =  req.body;
  var m=new Model('User');
  m.findOne(user,function(err,doc){
    if(err){
      res.redirect('/users/login');
    }
    else{
      res.redirect('/article/add');
    }
  })
});

router.get('/logout', function(req, res, next) {
  res.send('退出');
});
module.exports = router;
