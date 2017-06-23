var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

	function getRandomArbitary(min, max){
  		return Math.random() * (max - min) + min;
	}


	var ress = "Ваше счастливое число на сегодня " + getRandomArbitary(0, req.body.num).toFixed(0);
	
	res.render('index', {rbody: ress});

});


module.exports = router;
