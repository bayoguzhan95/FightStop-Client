import React from "react";
import { Card } from "antd";
import DefaultImage from '../../images/default.png'
import { AiOutlineDelete ,AiOutlineEdit  } from 'react-icons/ai';
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminTrainerCard = ({ trainer, handleRemove }) => {
  // destructure
  const { title, description, images, slug } = trainer;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : DefaultImage}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
          alt="EgitmenFotograf"
        />
      }
      actions={[
        <Link to={`/admin/trainer/${slug}`}>
          <AiOutlineEdit className="text-warning" />
        </Link>,
        <AiOutlineDelete
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminTrainerCard;
