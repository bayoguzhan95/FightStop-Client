// import React from "react";
// import { Card } from "antd";
// import laptop from "../../images/laptop.png";
// import { AiOutlineDelete ,AiOutlineEdit  } from 'react-icons/ai';
// import { Link } from "react-router-dom";

// const { Meta } = Card;

// const AdminProductCard = ({ product, handleRemove }) => {
//   // destructure
//   const { title, description, images, slug } = product;

//   return (
//     <Card
//       cover={
//         <img
//           src={images && images.length ? images[0].url : laptop}
//           style={{ height: "150px", objectFit: "cover" }}
//           className="p-1"
//           alt="Card"
//         />
//       }
//       actions={[
//         <Link to={`/admin/product/${slug}`}>
//           <AiOutlineEdit className="text-warning" />
//         </Link>,
//         <AiOutlineDelete
//           onClick={() => handleRemove(slug)}
//           className="text-danger"
//         />,
//       ]}
//     >
//       <Meta
//         title={title}
//         description={`${description && description.substring(0, 40)}...`}
//       />
//     </Card>
//   );
// };

// export default AdminProductCard;
