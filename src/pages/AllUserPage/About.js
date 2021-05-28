import React, { useState, useEffect } from 'react';

import { getAboutsByCount } from '../../functions/about';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../../components/animations/index';
import defaultPhoto from '../../images/default.png'

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllAbout();
  }, []);

  const loadAllAbout = () => {
    setLoading(true);
    getAboutsByCount(100)
      .then((res) => {
        setAbouts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={transition}>
      <div className='navbar_for_others'></div>

      <section className='about_section'>
        {abouts.map((c) => (
          <div className='about_container' key={c._id}>
            <div className='columnLeft'>
              <h1> {c.title}</h1>
              <p>{c.description}</p>
            </div>

            <div className='columnRight'>
              <img src={ c.images && c.images.length ? c.images[0].url : defaultPhoto } alt='about' />
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default About;
