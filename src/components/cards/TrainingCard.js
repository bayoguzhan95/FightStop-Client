import React from 'react';

const TrainingCard = ({ training }) => {
  const { images, title, description } = training;

  return (
    <>
      <div className='navbar_for_others'></div>

      <section className='about_section'>
        <div className='about_container_training'>
          <div className='columnLeft_training'>
            <h1> {title} </h1>

            <p>{description}</p>
          </div>

          <div className='columnRight_training'>
            {images &&
              images.map((image) => (
                <div count='X' key={image.public_id}>
                  <img src={image.url} alt='TrainingCard' shape='square' className='ml-3 mb-3' />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingCard;
