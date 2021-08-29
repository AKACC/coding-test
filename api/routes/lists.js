var express = require('express');
var router = express.Router();
var ListController = require('../controllers/listController');



/* GET home page. */
router.get('/getCategoryList' , ListController.getCategoryList);
router.post('/getListByCategory', ListController.getImageListByCategory);


module.exports = router;
