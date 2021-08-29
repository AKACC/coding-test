const listData = require('../constants/listData');

/**
 * Models
 * 
 */
module.exports = {
    getCategoryList:()=>{
        return Object.keys(listData);
    },

    // get image url list by request
    getImageList:(category_list = [])=>{
        if(category_list.length == 0)
            return [];

        let result = [];
        category_list.map((ctg, index)=>{
            // merge arrays
            result = [...result, ...listData[ctg]];
        })
        return result;
    },
}



