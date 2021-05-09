import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CloseIcon from '@material-ui/icons/Close';
import MoreDropdown from './MoreDropdown';

import '../Visualization/MoreButton.css'; 

function MoreButton(){

    const [isClicked, setIsClicked] = useState(false);
    
    const [vanCarIsClicked, setVanCarIsClicked] = useState(false)
    const [luxuryCarIsClicked, setLuxuryCarIsClicked] = useState(false)
    const [convertibleCarIsClicked, setConvertibleCarIsClicked] = useState(false)
    const [pickupTruckIsClicked, setPickupTruckIsClicked] = useState(false)

    const [isChosen, setIsChosen] = useState('');
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setIsClicked(!isClicked)
    }

    const resetCheckboxes = () =>{
        setIsClicked(false);
        setVanCarIsClicked(false);
        setLuxuryCarIsClicked(false);
        setConvertibleCarIsClicked(false);
        setPickupTruckIsClicked(false);
        setCount(0);

    }

    const checkIfInCheckBoxSomethingIsClicked = () =>{
        if(vanCarIsClicked && !luxuryCarIsClicked && !convertibleCarIsClicked && !pickupTruckIsClicked && isChosen !== "Van"){

            setIsChosen("Van");

        }
        if(!vanCarIsClicked && luxuryCarIsClicked && !convertibleCarIsClicked && !pickupTruckIsClicked && isChosen !== "Luxury"){
            
            setIsChosen("Luxury");
            
        }
        if(!vanCarIsClicked && !luxuryCarIsClicked && convertibleCarIsClicked && !pickupTruckIsClicked && isChosen !== "Convertible"){
            
            setIsChosen("Convertible")
        }
        if(!vanCarIsClicked && !luxuryCarIsClicked && !convertibleCarIsClicked && pickupTruckIsClicked  && isChosen !== "Pickup"){
            
            setIsChosen("Pickup");
        }
        if(!vanCarIsClicked && !luxuryCarIsClicked && !convertibleCarIsClicked && !pickupTruckIsClicked  && isChosen !== ""){
            
            setIsChosen("");
        }
    }

    
    checkIfInCheckBoxSomethingIsClicked();


    return(
        <div className='more-button'>
            <button onClick={() => handleClick()} 
            className={isClicked ? "more-button-clicked" : "more-button-unclicked"}>
                <div className='more-container'>
                    <div className='more'>More</div>
                    {count < 2 ? (isChosen === "" ? null : <div className='cars-name'>{isChosen}</div>) : <div className='cars-name'>{count} selected</div>}
                </div>

                {isChosen === "" ? (isClicked ? <ExpandLessIcon /> : <ExpandMoreIcon />) : <CloseIcon onClick={() => resetCheckboxes()} />}

            </button>
            {isClicked ? 
            <MoreDropdown setOffClicked={(value) => setIsClicked(value)}
            setVan={(value) => setVanCarIsClicked(value)} setLuxury={(value) => setLuxuryCarIsClicked(value)}
            setConvertible={(value) => setConvertibleCarIsClicked(value)} setPickup={(value) => setPickupTruckIsClicked(value)}
            van={vanCarIsClicked} luxury={luxuryCarIsClicked} convertible={convertibleCarIsClicked} pickup={pickupTruckIsClicked}
            setCount={(value) => setCount(value)} count={count}
            /> : null}
        </div>
    )
}

export default MoreButton;