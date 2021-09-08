var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/greet', function(req, res, next) {
  res.send('this is a text response from ');
});

module.exports = router;
