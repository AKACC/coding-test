var express = require('express');
var router = express.Router();

var ListController = require('../controllers/listController');

/* GET home page. */
router.get('/getListByCategory', ListController.getListByCategory);


module.exports = router;
