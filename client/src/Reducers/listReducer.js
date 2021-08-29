import * as types from '../Constants/actionTypes';

let listState = {
    isLoading:false,
    actionType:'',
    categoryList:[],
    imageList:[] 
}

export default function listReducer(state = listState, action) {
    switch (action.type) {
        case types.GET_CATEGORY_LIST:
            return{
                ...state,
                actionType:action.type,
                isLoading:true
            }
        case types.GET_CATEGORY_LIST_SUCCESS:
            return{
                ...state,
                actionType:action.type,
                isLoading:false,
                categoryList:action.data
            }
        case types.GET_CATEGORY_LIST_FAILED:
            return{
                ...state,
                actionType:action.type,
                isLoading:false
            }
        case types.GET_IMAGE_LIST:
            return{
                ...state,
                actionType:action.type,
                isLoading:true
            }
        case types.GET_IMAGE_LIST_SUCCESS:
            return{
                ...state,
                actionType:action.type,
                isLoading:false,
                imageList:action.data
            }
        case types.GET_IMAGE_LIST_FAILED:
            return{
                ...state,
                actionType:action.type,
                isLoading:false
            }
    
            
        default:
            return state;
    }

}