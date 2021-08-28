const {
    sharksList,
    catsList
} = require('../constants/listData');

module.exports = {
    getList:({category})=>{
        switch(category){
            case 'cats':
                return catsList;
            case 'sharks':
                return sharksList;
            default:
                return [];
        };
    }


}



