import React from 'react';

import { AiOutlineDelete } from 'react-icons/ai';
import { Card } from 'antd';
import defaultImage from '../../images/bg.jpg';

const AdminHomeCard = ({ home, handleRemove }) => {
  const { homes, slug } = home;
  return (
    <Card
      cover={
        <img
          src={homes && homes.length ? homes[0].url : defaultImage}
          style={{ height: '150px', objectFit: 'cover' }}
          className='p-1'
          alt='Fotograflar'
        />
      }
      actions={[<AiOutlineDelete onClick={() => handleRemove(slug)} className='text-danger' />]}
    ></Card>
  );
};

export default AdminHomeCard;
