import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => (
  <nav>
    <ul className='nav flex-column'>
      <li className='nav-item'>
        <Link to='/admin/dashboard' className='nav-link'>
          Dashboard
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/admin/trainings' className='nav-link'>
          Eğitimler
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/admin/trainers' className='nav-link'>
          Eğitmenler
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/admin/images' className='nav-link'>
          Fotoğraflar
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/admin/abouts' className='nav-link'>
          Hakkımızda
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/admin/homes' className='nav-link'>
          Anasayfa Fotoğraf
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
