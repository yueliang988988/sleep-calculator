import React from 'react';
import { motion } from 'framer-motion';

type SolutionDisplayProps = {
  isOpen: boolean,
  solutionArray: string[]
}

const parent = {
  opening: {
    transition: {
      staggerChildren: 0.07, delayChildren: 0.2
    }
  },
  closing: {
    transition: {
      staggerChildren: 0.05, staggerDirection: -0.5
    }
  }
};

const children = {
  opening: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closing: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({solutionArray, isOpen}) => {
  
  return (
    <motion.div
      className='flex flex-row justify-start items-start gap-4'
      animate={ isOpen ? "opening" : "closing"}
      variants={parent}
    >
      {
        solutionArray.map( time => (
          <motion.div
            className="bg-amber-300"
            key={time}
            variants={children}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {time}
          </motion.div>
        ))
      }
    </motion.div>
  )
}

export default SolutionDisplay