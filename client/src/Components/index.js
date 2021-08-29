import './index.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Slider from './Slider';
import LoadingIndicator from './LoadingIndicator';
import ListAction from '../Actions/listAction';

export default function ImageCarousel(){
    const dispatch = useDispatch();
    const { isLoading, categoryList, imageList} = useSelector(({ListReducer}) => ListReducer);

    const [ state, setState ] = useState({
      selectedCategories:[]
    });

    useEffect(async()=>{
      dispatch(ListAction.getCategoryList());
    },[]);
    useEffect(async()=>{
      console.log(state.selectedCategories) 
    },[state.selectedCategories]);

    function _updateSelectedCategories(category){
      let isSelected = state.selectedCategories.includes(category);
      let newList = [...state.selectedCategories]
      if(isSelected){
        let index = newList.indexOf(category);
        newList.splice(index, 1);
      }else{
        newList.push(category);
      }

      dispatch(ListAction.getImageList(newList));

      setState({
        ...state,
        selectedCategories:newList
      })
     
    }

    return (
      <div className="container">
      
        <CategorySelector 
          categories={categoryList} 
          selected={state.selectedCategories}
          onSelect={(category)=>{
            _updateSelectedCategories(category)
          }}
        />
        <Slider images={imageList}/>
        <LoadingIndicator isLoading={isLoading} containerStyle={{position:'absolute'}}/>
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
              style={{ backgroundColor: isSelected ? '#6623f5':'#000'}} 
            >
              {ctg}
            </button>
          </div>
        )
      })}
    </div>
  )
}