import React from 'react';

import '../Visualization/FilterHeader.css';

function FilterHeader(props){

    const checkIfAnyButtonIsClicked = () =>{
        if(props.small || props.medium || props.large || props.suv){
            return true
        }
        return false
      }
    
    const resetButtons = () =>{
        props.setsmall(false)
        props.setmedium(false)
        props.setlarge(false)
        props.setsuv(false)
    }
    return(
        <div className='filter-header'>
            <div className='filter-title'>Car type</div>
            {(checkIfAnyButtonIsClicked() === true) ? <div className='reset-button' onClick={() => resetButtons()}>Reset</div> : null}
        </div>
    )
}

export default FilterHeader;