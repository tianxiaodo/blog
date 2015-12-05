var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send("文章列表");
});

router.get('/add', function(req, res, next) {
  res.render('article/add', { title: 'Express' });
});
router.post('/add', function(req, res, next) {
  res.send("发表文章");
});
module.exports = router;
