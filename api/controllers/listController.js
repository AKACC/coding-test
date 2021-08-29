var ListLogic = require('../logics/listLogic');
/**
 * Controller
 * 
 * handling request and reponse
 */
module.exports = {
    getCategoryList: (req, res, next) => {
        const {headers} = req;
        const result = ListLogic.getCategoryList();
        res.json(result);
    },
    getImageListByCategory: (req, res, next) => {
        const {body} = req;
        const result = ListLogic.getImageList(body.categories);
        res.json(result);
    }



}

