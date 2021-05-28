import React from 'react';


function CardItem2(props) {
  return (
    <>
      <li className='home__cards__item'>
        <section className='container bolum3'>
          <div className='CardWrapHome'>
            <div className='HomePageCard'>

            <i className={`${props.icon}`}></i>
         

              <p className='Home_Card_title'> {props.text} </p>
              <p className='Home_Card_Des'>Çok yakında...</p>
            </div>
          </div>
        </section>
      </li>
    </>
  );
}

export default CardItem2;
