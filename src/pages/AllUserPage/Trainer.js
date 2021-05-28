import React, { useState, useEffect } from 'react';
import TrainerCard from '../../components/cards/TrainerCard';
import { getTrainer } from '../../functions/trainer';
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../../components/animations/index'

const Trainer =  ({match}) => {

    const [trainer , setTrainer] = useState({});

    const {slug} = match.params;

    useEffect(()=>{
        loadSingleTrainer();
      },[slug])

      
      const loadSingleTrainer = () => getTrainer(slug).then(res=> setTrainer(res.data))
    return (
        <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
        <TrainerCard trainer={trainer} />
        </motion.div>
    )
}

export default Trainer
