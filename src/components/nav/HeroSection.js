import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import photo from '../../images/bg.jpg';

import Jumbotron from './Jumbotron';
import { getHomesByCount } from '../../functions/home';

function HeroSection() {

   const [homes, setHomes] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
     loadAllHomes();
   }, []);

   const loadAllHomes = () => {
     setLoading(true);
     getHomesByCount(100)
       .then((res) => {
         setHomes(res.data);
         setLoading(false);
       })
       .catch((err) => {
         setLoading(false);
         console.log(err);
       });
   };

   

  
  return (
    <>

    {homes.map((c) => (
      <div className='hero-container' key={c._id} >
       <img src={ c.images && c.images.length ? c.images[0].url : photo } alt="FightStop" />
       <div className='slider_text'>
         <Jumbotron text={['FightStop', 'Yolculuğa hazır mısın ?', 'Seni bekliyoruz.', 'Sınırlarına meydan oku!']} />
       </div>
       <div className='button_position'>
         <div className='hero-btns'>
           <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
             İLETİŞİM
           </Button>
           <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
             ÇOK YAKINDA... <i className='far fa-play-circle' />
           </Button>
         </div>
       </div>
       </div>
       
        ))}

   

     
 
    </>
  );
}

export default HeroSection;
