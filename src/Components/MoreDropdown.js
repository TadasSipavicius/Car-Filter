import React, {useRef, useEffect} from 'react';
import CarData from '../FiltersData/FiltersData';
import DropDown from './DropDown';

import VanCarImage from '../Assets/Images/Van.png';
import LuxuryCarImage from '../Assets/Images/luxury.png';
import ConvertibleCarImage from '../Assets/Images/convertible.png';
import PickupTruckImage from '../Assets/Images/pickup truck.png';

import '../Visualization/MoreDropDown.css';

export default function MoreDropdown(props){


  const ref = useRef();

  useOnClickOutside(ref, () => props.setOffClicked(false));

    return(
        <div ref={ref} className='dropdown-container'>
            <DropDown image={VanCarImage} carname={CarData[4].name} carprice={CarData[4].price}
            setClicked={(value) => props.setVan(value)} isClicked={props.van} setCount={(value) => props.setCount(value)} count={props.count}
            />
            <DropDown image={LuxuryCarImage} carname={CarData[5].name} carprice={CarData[5].price}
            setClicked={(value) => props.setLuxury(value)} isClicked={props.luxury}  setCount={(value) => props.setCount(value)} count={props.count}
            />
            <DropDown image={ConvertibleCarImage} carname={CarData[6].name} carprice={CarData[6].price}
            setClicked={(value) => props.setConvertible(value)} isClicked={props.convertible}  setCount={(value) => props.setCount(value)} count={props.count}
            />
            <DropDown image={PickupTruckImage} carname={CarData[7].name} carprice={CarData[7].price}
            setClicked={(value) => props.setPickup(value)} isClicked={props.pickup}  setCount={(value) => props.setCount(value)} count={props.count}
            />
        </div>
    )

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          [ref, handler]
        );
        }
}