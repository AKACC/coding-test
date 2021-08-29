/**
 * Logic
 * 
 * 1. process data before fetching from Models
 * 2. process raw data
 */

var ListModel = require('../models/listModel');

// shuffle array random order
function _shuffleArray(array){
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

module.exports = {
    getCategoryList:()=>{
        const result = ListModel.getCategoryList();
        return result;
    },
    getImageList:(category_list)=>{
        const result = ListModel.getImageList( category_list );
        return _shuffleArray(result);
    },
}

   
   
   
   
