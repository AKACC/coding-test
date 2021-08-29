import { useState } from 'react';
import './styles.css';
import {
    BiRightArrowCircle,
    BiLeftArrowCircle,
  } from "react-icons/bi";
import { IconContext } from "react-icons";
export default function Slider({
    images = []
}){
    const [current, setCurrent] = useState(0);
    const length = images.length;
    
    // change page button
    // go to next page, once it reachs out to the last,
    // then cycle back to the first page
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return(
        <div className="slide-container">
            <LeftArrow onClick={()=>prevSlide()} />
            <div className="slider">
                { 
                    images.length > 0 ?
                        images.map((img, index) =>(
                            <div style={{ flex: 1 }} key={`img_${index}`}>
                                {index === current && (<img src={img} height="400" className="slide-image" alt={'image'}/>)}
                            </div>
                        ))
                    :
                    <EmptyListPage />
                }
            </div>
            <RightArrow onClick={()=>nextSlide()} />
        </div>
    )
}

function EmptyListPage(){
    return(
        <div style={{ width: '500px', height: '300px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{color:'#e4e4e4',}}>no photos</p>
        </div>
    )
}
function LeftArrow({
    onClick = null
}){
    return (
        <div className='page-button-container' style={{left:50}}>
            <IconContext.Provider value={{ color: "white",  size: '3em'}} >
                <div>
                    <BiLeftArrowCircle onClick={onClick}/>
                </div>
            </IconContext.Provider>
        </div>
    )
}

function RightArrow({
    onClick = null
}){
    return (
        <div className='page-button-container' style={{right:50}}>
            <IconContext.Provider value={{ color: "white",  size: '3em'}} >
                <div>
                    <BiRightArrowCircle onClick={onClick}/>
                </div>
            </IconContext.Provider>
        </div>
    )
}