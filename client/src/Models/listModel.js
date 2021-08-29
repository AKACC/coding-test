import {
    GET_CATEGORY_LIST_API,
    GET_IMAGE_LIST_API
} from '../Constants/API'
const axios = require('axios');


export default  {
    getCategoryList(){
        let options = {
            method: 'get',
            // mode: "cors",
            url: GET_CATEGORY_LIST_API,
            headers: {
                "Content-Type": "application/json",
            },
        };

        return axios.request(options)
        .then((res) => {
            return res.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },
    getImageList(categories){
        let options = {
            method: 'post',
            // mode: "cors",
            url: GET_IMAGE_LIST_API,
            headers: {
                "Content-Type": "application/json",
            },
            data:{
                categories
            } 
        };

        return axios.request(options)
        .then((res) => {
            return res.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }


}