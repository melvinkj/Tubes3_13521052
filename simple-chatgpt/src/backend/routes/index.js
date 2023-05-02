var express = require('express');
var router = express.Router();
var port = process.env.PORT || 5000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
