import * as types from '../Constants/actionTypes';
import ListModel from '../Models/listModel';

/** 
 * List Actions
 * 
 */
export default {
    getCategoryList(){
        return dispatch => {
            dispatch({
              type: types.GET_CATEGORY_LIST,
            });
            ListModel.getCategoryList()
                .then(res => {
                    dispatch({
                        type: types.GET_CATEGORY_LIST_SUCCESS,
                        data: res
                    });
                })
                .catch(e => {
                    dispatch({
                        type: types.GET_CATEGORY_LIST_FAILED,
                        errorMessage: e.message
                    });
                });
        };
    },
    getImageList(categories=[]){
        return dispatch => {
            dispatch({
              type: types.GET_IMAGE_LIST,
            });
            ListModel.getImageList(categories)
                .then(res => {
                    dispatch({
                        type: types.GET_IMAGE_LIST_SUCCESS,
                        data: res
                    });
                })
                .catch(e => {
                    dispatch({
                        type: types.GET_IMAGE_LIST_FAILED,
                        errorMessage:  e.message
                    });
                });
        };
    }

}