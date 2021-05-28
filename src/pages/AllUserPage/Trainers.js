import React, { useState, useEffect } from 'react';
import TrainersCard from '../../components/cards/TrainersCard';
import { getTrainersByCount } from '../../functions/trainer';
import { motion } from 'framer-motion'
import { animationTwo,  transition } from '../../components/animations/index'

const Trainers = () => {


    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAllTrainers();
      }, []);


      const loadAllTrainers = () => {
        setLoading(true);
        getTrainersByCount(100)
          .then((res) => {
            setTrainers(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      };


  return (
    <motion.div   initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
      <div className='navbar_for_others'></div>
      <section className='page_section_trainers ' id='team'>
        <div className='container'>
          <div className='text-center'></div>
          <div className='row pt-5'>

          {trainers.map((trainer) => (
                <div key={trainer._id} className='col-lg-4 col-sm-6 mt-5 mb-4'>
                  <TrainersCard trainer={trainer} />
                </div>
              ))}

     
          </div>
        </div>
        <div className='forSpace'></div>
        <div className='forSpace1'></div>
      </section>
    </motion.div>
  );
};

export default Trainers;
