import React from 'react';

import { AiOutlineDelete } from 'react-icons/ai';
import { Card } from 'antd';
import defaultImage from '../../images/default.png';

const AdminImageCard = ({ image, handleRemove }) => {
  const { images, slug } = image;
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : defaultImage}
          style={{ height: '150px', objectFit: 'cover' }}
          className='p-1'
          alt='Fotograflar'
        />
      }
      actions={[<AiOutlineDelete onClick={() => handleRemove(slug)} className='text-danger' />]}
    ></Card>
  );
};

export default AdminImageCard;
