import React from 'react';
import ToolTip from './ToolTip';

import '../Visualization/FilterButton.css'

export default function FilterButton(props){

    const handleClick = () =>{
        if(props.button === false){
            props.setButton(true);
        }
        else{
            props.setButton(false)
        }
    }

    return(
        <div className="car-button-">
            <ToolTip text={props.price}>
                <button onClick={() => handleClick()} 
                className={props.button ? "button-clicked" : props.imageName}>
                    <img src={props.image} alt={props.imageName}></img>
                    <div className='button-name'>{props.imageName}</div>
                </button>
            </ToolTip>
        </div>
    )
}