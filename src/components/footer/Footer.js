import {React} from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

import { FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (

<div> 
    {(() => {
      if (user && user.role === 'admin') {
        return null;
      } else {
        return (
          <div>
          <div className='container_footer'></div>
          <footer>
            <section className='ft-main'>
              <div className='ft-main-item'>
                <h2 className='ft-title'>Bizi arayın</h2>
                <ul className='footer_css'>
                  <a href='tel:+905300406790'>
                    <FaPhone className="footer_top"  />
                    <b className='text_font_footer'> +90 530 040 67 90</b> 
                  </a>
                </ul>
              </div>
              <div className='ft-main-item'>
                <h2 className='ft-title adress_title '>Adres</h2>
                <ul className='footer_css'>
                  <FaMapMarkerAlt className="footer_top" />
                  <b>
                     
                    <Link to='/iletisim' className='text_font_footer'>
                       
                      Abdi İpekçi Caddesi, Azer İş Merkezi No:40 Nişantaşı 
                    </Link> 
                  </b> 
                </ul>
              </div>
              <div className='ft-main-item'>
                <h2 className='ft-title'> Mail Gönderin </h2>
                <ul className='footer_css'>
                  <a href='mailto:info@fightstoptr.com'>
                    <FaPaperPlane className="footer_top" />
                    <b className='text_font_footer'> info@fightstoptr.com</b> 
                  </a>
                </ul>
              </div>
            </section>
    
            <section className='ft-social'>
              <ul className='ft-social-list'>
                <li>
                  <a target='_blank' rel='noreferrer' href='https://www.instagram.com/fightstoptr/'>
                    <FaFacebook className="social-icon"/>
                  </a>
                </li>
    
                <li>
                  <a target='_blank' rel='noreferrer' href='https://www.instagram.com/fightstoptr/'>
                    <FaInstagram className="social-icon"/>
                  </a>
                </li>
              </ul>
            </section>
    
            <section className='ft-legal'>
              <ul className='ft-legal-list'>
                <li> </li>
    
                <li>&copy; 2021 FightStop Tüm hakları saklıdır. </li>
                <li></li>
              </ul>
            </section>
          </footer>
        </div>
        
        );
      }
    })()}

</div>



   
  );
};

export default Footer;
