import React, { useState, useEffect } from 'react';
import TrainingCard from '../../components/cards/TrainingCard';
import { getTraining } from '../../functions/training';
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../../components/animations/index'
const Training = ({match}) => {
  const [training , setTraining] = useState({});

  const {slug} = match.params;

  useEffect(()=>{
    loadSingleTraining();
  },[slug])


  const loadSingleTraining = () => getTraining(slug).then(res=> setTraining(res.data))
 


  return (
    <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
       <TrainingCard training={training}  /> 
    </motion.div>
  );
};

export default Training;
