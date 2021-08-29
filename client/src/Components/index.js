import './index.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider';
import LoadingIndicator from './LoadingIndicator';
import ListAction from '../Actions/listAction';
import * as types from '../Constants/actionTypes';
export default function ImageCarousel(){
    const dispatch = useDispatch();
    const { actionType, errorMessage, isLoading, categoryList, imageList} = useSelector(({ListReducer}) => ListReducer);

    const [ selected, setSelected ] = useState([]);

    // app open, get the list of categories
    useEffect(async()=>{
      dispatch(ListAction.getCategoryList());
    },[]);

    // keep track of action status
    // display messages related to current action
    useEffect(async()=>{
      switch(actionType){
        case types.GET_CATEGORY_LIST_SUCCESS:
          dispatch(ListAction.getImageList(categoryList));
          setSelected(categoryList)
          break;
        case types.GET_CATEGORY_LIST_FAILED:
        case types.GET_IMAGE_LIST_FAILED:
          // display error message
          toast.error(errorMessage)
          break;
      } 
      
    },[actionType]);

    function _updateSelectedCategories(category){
      let isSelected = selected.includes(category);
      let newList = [...selected]
      if(isSelected){
        // category is selected, unselete from the list
        let index = newList.indexOf(category);
        newList.splice(index, 1);
      }else{
         // category is NOT selected, push into the list
        newList.push(category);
      }

      dispatch(ListAction.getImageList(newList));

      setSelected(newList)
     
    }

    return (
      <div className="container">
      
        <CategorySelector 
          categories={categoryList} 
          selected={selected}
          onSelect={(category)=>{
            _updateSelectedCategories(category)
          }}
        />
        <Slider images={imageList}/>
        <LoadingIndicator isLoading={isLoading} containerStyle={{position:'absolute'}}/>
        <ToastContainer />
      </div>  
    );
}
function CategorySelector({
  categories=[],
  selected=[],
  onSelect=null
}){
  return(
    <div style={{ padding:'20px', display:'flex', flexDirection:'row', whiteSpace:'break-spaces', alignItems:'center', justifyContent:'center'}}>
      { categories.map((ctg, index)=>{
        let isSelected = selected.includes(ctg)
        return(
          <div style={{marginRight:'10px', marginLeft:'10px'}}  key={`category_selector_${index}`}>
            <button className='category-button' 
              type="button" 
              onClick={(e)=>{ 
                e.preventDefault(); 
                onSelect(ctg)
              }} 
              style={{ backgroundColor: isSelected ? '#6623f5':'#4e4e4e'}} 
            >
              {ctg}
            </button>
          </div>
        )
      })}
    </div>
  )
}