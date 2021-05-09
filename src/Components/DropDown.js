import React from 'react';

import '../Visualization/DropDown.css';

export default function DropDown(props){

    const handleClick = () => {
        if(props.isClicked){
            props.setClicked(false);
            props.setCount(props.count - 1);
        }
        else{
            props.setClicked(true);
            props.setCount(props.count + 1);
        }
    } 

    return(
        <div className='dropdown-car' onClick={handleClick}>
            <div className='left-side'>
                <input 
                type="checkbox"
                checked={props.isClicked}
                onChange={handleClick}
                />
                <label>
                    <img src={props.image} alt={props.carname}></img>
                    <div className='car-name'>{props.carname}</div>
                </label>
            </div>
            <div className='car-price'>{props.carprice}</div>
        </div>
    )
}