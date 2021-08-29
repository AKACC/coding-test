const listData = require('../constants/listData');

module.exports = {
    getCategoryList:()=>{
        return Object.keys(listData);
    },
    getImageList:(category_list = [])=>{
        if(category_list.length == 0)
            return [];

        let result = [];
        category_list.map((ctg, index)=>{
            result = [...result, ...listData[ctg]];
        })
        return result;
    },
}



