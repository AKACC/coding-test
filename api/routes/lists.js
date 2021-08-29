var express = require('express');
var router = express.Router();
var ListController = require('../controllers/listController');



/* GET image data */

/**
 * getCategoryList
 * 
 * method: GET
 * parameters: none
 * return: category_list : array
 * example:["cats","sharks"]
 */
router.get('/getCategoryList' , ListController.getCategoryList);


/**
 * getListByCategory
 * 
 * method: POST
 * parameters: none
 * body: {
 *      categories: array
 * }
 * return: image_list : array
 * example:["img_url1","img_url2"]
 */
router.post('/getListByCategory', ListController.getImageListByCategory);


module.exports = router;
