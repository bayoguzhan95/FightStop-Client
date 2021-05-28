import React from "react";

import DefaultImage from '../../images/default.png'
import { Link } from "react-router-dom";



const TrainingsCard = ({ training }) => {

  // destructure
  const { images, title, slug } = training;


  return (
    <div  className="portfolio-item" >
    <Link to={`/egitimler/${slug}`} className="portfolio-link" data-toggle="modal" >
    
        <img  className="img-fluid" src={images && images.length ? images[0].url : DefaultImage} alt="Training" />
    </Link>
    <div  className="portfolio-caption">
        <div  className="portfolio-caption-heading">
          <h4>
          {title} 
          </h4>
        
          </div>

    </div>
</div>
  );
};



export default TrainingsCard
