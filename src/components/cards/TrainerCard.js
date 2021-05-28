import React from 'react';

const TrainerCard = ({ trainer }) => {
  const { images, title, description } = trainer;

  return (
    <>
      <div className='navbar_for_others'></div>

      <section className='trainer_section'>
        <div className='trainer_container'>
          <div className='trainer_columnLeft'>
            <h1> {title} </h1>

            <p>{description}</p>

          
        
          </div>

          <div className='trainer_columnRight'>
            {images &&
              images.map((image) => (
                <div count='X' key={image.public_id}>
                  <img src={image.url} shape='square' className='ml-3 mb-3' alt="TrainerCard" />
                </div>
              ))}
          </div>

        
        </div>
      </section>
    </>
  );
};

export default TrainerCard;
