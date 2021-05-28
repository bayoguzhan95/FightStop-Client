import React from 'react';
import CardItem from './CardItem';
import CardItem2 from './CardItem2'
import photo from '../../images/d.jpg'
import photo1 from '../../images/c.jpg'


function Cards() {
  return (
    <div className='home__cards'>
      <h1>Hemen şimdi katıl değişime başla!</h1>
      <div className='home__cards__container'>
        <div className='home__cards__wrapper'>
          <ul className='home__cards__items'>
            <CardItem
              src={photo}
              text='EĞİTİMLERİMİZE GÖZ ATIN'
              label='Eğitimler'
              path='/egitimler'
            />
            <CardItem
              src={photo1}
              text='HİJYEN KURALLARINI ÖNEMSİYORUZ !'
              label='Hijyen'
              path='/hijyen'
            />
          </ul>
          <ul className='home__cards__items'>
            <CardItem2
              text='Yeni Ne Var ?'
              label='Çok Yakında...'
              icon='fas fa-bullhorn'
            />
            <CardItem2
              text='Aldığımız Ödüller'
              label='Çok Yakında...'
              icon='fas fa-trophy'
     
            />
            <CardItem2
            text='Sosyal Projeler'
            label='Çok Yakında...'
            icon='far fa-handshake'
            />
              
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
