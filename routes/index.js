var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', (req, res) => {
  res.status(200).json({
    massage: 'Hello world moine',
  });
});

module.exports = router;
