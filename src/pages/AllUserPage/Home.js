import React from 'react';

import Cards from '../../components/nav/Cards';
import HeroSection from '../../components/nav/HeroSection';
import { SliderData } from '../../components/nav/SliderData';



const Home = () => {
  return (
    <div>
       <HeroSection slides={SliderData} />
      <Cards /> 
    
    
    </div>
  );
};

export default Home;
