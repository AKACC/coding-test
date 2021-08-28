var ListModel = require('../models/listModel');

module.exports = {
    getListByCategory: (req, res, next) => {
        const {headers} = req;
        const result = ListModel.getList({category:headers.category});
        res.json(result);
    }



}

