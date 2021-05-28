import React from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../../images/default.png';
const TrainersCard = ({ trainer }) => {
  const { images, title, slug } = trainer;
  return (
    <>
      <div className='team-member'>
        <Link to={`/antrenörlerimiz/${slug}`}>
          <img
            className='mx-auto rounded-circle trainers_image'
            src={images && images.length ? images[0].url : DefaultImage}
            alt='TrainersCard'
          />

          <h4 className='trainers_title'> {title} </h4>
        </Link>
      </div>
    </>
  );
};

export default TrainersCard;
