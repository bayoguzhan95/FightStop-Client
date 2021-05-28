import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import photos from '../../images/logo/logo1.png';


const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let dispatch = useDispatch();
  let history = useHistory();
  let { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    history.push('/login');
  };

  const dashboard = () => {
    history.push('/admin/dashboard');
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      {(() => {
        if (user && user.role === 'admin') {
          return (
            <nav className='navbar'>
              <div className='navbar-container'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item' onClick={dashboard}>
                    <Link to='/hakkimizda' className='nav-links'>
                      DashBoard
                    </Link>
                  </li>
                  <li className='nav-item' onClick={logout}>
                    <Link to='/hakkimizda' className='nav-links'>
                      Çıkış Yap
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          );
        } else {
          return (
            <nav className='navbar'>
              <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  <img src={photos} alt='' />
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Anasayfa
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/hakkimizda' className='nav-links' onClick={closeMobileMenu}>
                      Hakkımızda
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/egitimler' className='nav-links' onClick={closeMobileMenu}>
                      Eğitimler
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/antrenörlerimiz' className='nav-links' onClick={closeMobileMenu}>
                      Eğitmenlerimiz
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/hijyen' className='nav-links' onClick={closeMobileMenu}>
                      Hijyen
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/fotograflar' className='nav-links' onClick={closeMobileMenu}>
                      Galeri
                    </Link>
                  </li>
                  <li>
                    <Link to='/iletisim' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Bize Ulaşın
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Bize Ulaşın</Button>}
              </div>
            </nav>
          );
        }
      })()}
    </>
  );
};

export default Header;
