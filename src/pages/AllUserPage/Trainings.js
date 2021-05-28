import React, { useState, useEffect } from 'react';

import { getTrainingsByCount } from '../../functions/training';

import TrainingsCard from '../../components/cards/TrainingsCard';
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../../components/animations/index'
const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllTraining();
  }, []);

  const loadAllTraining = () => {
    setLoading(true);
    getTrainingsByCount(100)
      .then((res) => {
        setTrainings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
      <div className='navbar_for_others'></div>

      {loading ? (
        <div> LOADİNG </div>
      ) : (
        <section className="page-section pb-5" id="portfolio">
          <div className='container'>
            <div className='row lessonsPadding '>
              {trainings.map((training) => (
                <div key={training._id} className='col-lg-4 col-sm-6 mt-5 mb-4'>
                  <TrainingsCard training={training} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Trainings;
