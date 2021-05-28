import React, { useState, useEffect } from 'react';
import ImageCardItem from '../../components/cards/ImageCardItem';
import { getImages,  getImagesCount } from '../../functions/image';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../../components/animations/index';
import {Pagination} from 'antd'
const Gallery = () => {

  const [images, setImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [page, setPage] = useState(1);


  useEffect(() => {
    loadAllImages();
  }, [page]);

  useEffect(() => {
    getImagesCount().then(res => setImagesCount(res.data))
    
  }, []);

  const loadAllImages = () => {
    getImages("createdAt", "desc", page).then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
      <div className='navbar_for_others'></div>
      <div className='container'>
        <h1 className='imagesPage_header'>Fotoğraflar</h1>
     
        <div className='container1'>
          {images.map((image) => (
            <div className='cards' key={image._id}>
              <ImageCardItem image={image} />
            </div>
          ))}
        </div>
      </div>

     
  
    <div className="row pagination__css">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
       
          
          <Pagination
            current={page}
            total={(imagesCount / 9) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
      </motion.div>
    </>
  );
};

export default Gallery;
