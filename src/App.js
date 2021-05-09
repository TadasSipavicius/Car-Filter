//Tadas Sipavicius

import React, { useState } from 'react';
import FilterHeader from './Components/FilterHeader';
import FilterButton from './Components/FilterButton';
import MoreButton from './Components/MoreButton';

import SmallCarImage from './Assets/Images/CarSmall.png';
import MediumCarImage from './Assets/Images/medium.png';
import LargeCarImage from './Assets/Images/large.png';
import SUVCarImage from './Assets/Images/SUV.png';
import CarsData from './FiltersData/FiltersData';

import './App.css';

function App() {

  const [smallIsClicked, setSmallIsClicked] = useState(false);
  const [mediumIsClicked, setMediumIsClicked] = useState(false);
  const [largeIsClicked, setLargeIsClicked] = useState(false);
  const [suvIsClicked, setSuvIsClicked] = useState(false);


  return (
    <div className="App">

      <FilterHeader
      small={smallIsClicked} medium={mediumIsClicked} large={largeIsClicked} suv={suvIsClicked}
      setsmall={reset => setSmallIsClicked(reset)} setmedium={reset => setMediumIsClicked(reset)}
      setlarge={reset => setLargeIsClicked(reset)} setsuv={reset => setSuvIsClicked(reset)}
      />

      <div className='filters-buttons'>
        
        <FilterButton image={SmallCarImage} imageName={CarsData[0].name} 
        price={CarsData[0].price} setButton={small => setSmallIsClicked(small)} button={smallIsClicked}
        />

        <FilterButton image={MediumCarImage} imageName={CarsData[1].name} 
        price={CarsData[1].price} setButton={medium => setMediumIsClicked(medium)} button={mediumIsClicked}
        />

        <FilterButton image={LargeCarImage} imageName={CarsData[2].name} 
        price={CarsData[2].price} setButton={large => setLargeIsClicked(large)} button={largeIsClicked}
        />

        <FilterButton image={SUVCarImage} imageName={CarsData[3].name} 
        price={CarsData[3].price} setButton={suv => setSuvIsClicked(suv)} button={suvIsClicked}
        />

        <MoreButton />
      </div>

    </div>
  );
}

export default App;
