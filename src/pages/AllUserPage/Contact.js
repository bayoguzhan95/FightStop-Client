import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../../components/animations/index'
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Mailiniz Başarıyla Gönderildi');

    setName('');
    setMail('');
    setText('');
  };

  return (

      <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
     <div className='navbar_for_others'></div>
    <div className='main_contact7'>
      <section className='container-fluid contact7'>
        <div className='Map'>
          <iframe
            title='MAP'
            width='90%'
            height='300'
            frameBorder='0'
            scrolling='false'
            marginHeight='0'
            marginWidth='0'
            src='https://www.openstreetmap.org/export/embed.html?bbox=28.99140447378159%2C41.047529643246335%2C28.99416714906693%2C41.04920047828836&amp;layer=mapnik&amp;marker=41.048365066070794%2C28.992785811424255'
          ></iframe>
          <br />
          <small>
            <a href='https://www.openstreetmap.org/?mlat=41.04837&amp;mlon=28.99279#map=19/41.04837/28.99279'>FightStop</a>
          </small>
        </div>
        <div className='row'>
          <div className='col-md-6 '>
            <h3 className='Contact_header'>Bize Ulaşın </h3>
            <div className='baslik'></div>
            <div className='icerikDiv'>
              <div className='contact_us_css container'>
                <h6>
                  <b>Adres :</b> Abdi İpekçi Caddesi, Azer İş Merkezi  No : 40, Nişantaşı
                </h6>
                <h6>
                  <b>Telefon :</b> +90 530 040 67 90
                </h6>
                <h6>
                  <b>Email :</b> info@fightstoptr.com
                </h6>
              </div>
            </div>
          </div>
          <article className='col-md-6'>
            <form onSubmit={handleSubmit}>
              <div className='form-group w-50'>
                <label htmlFor='exampleFormControlInput1'>Adınız</label>
                <input type='text' className='form-control' required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group w-50'>
                <label htmlFor='exampleFormControlInput1'>Mail Adresiniz</label>
                <input type='email' className='form-control' required value={mail} onChange={(e) => setMail(e.target.value)} />
              </div>

              <div className='form-group w-50'>
                <label htmlFor='exampleFormControlTextarea1'>Mesajınız</label>
                <textarea className='form-control' value={text} onChange={(e) => setText(e.target.value)} rows='3'></textarea>
              </div>

              <button type='submit' className='btn  onSubmitButton'>
                Gönder
              </button>
            </form>
          </article>
        </div>
      </section>
    </div>
    </motion.div>
  );
};

export default Contact;
