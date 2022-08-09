import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SolutionDisplayProps = {
  solutionArray: string[]
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({solutionArray}) => {
  
  return (
  <div className='flex flex-row justify-start items-start gap-4'>

      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[0]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.05,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[0]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[1]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.15,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[1]}
            </motion.div>
      </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[2]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.25,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[2]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[3]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.35,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[3]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[4]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.45,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[4]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[5]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.55,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[5]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArray[6]}
              initial={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                delay: 0.65,
                y: {
                  stiffness: 1000, velocity: -100
                }
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ 
                y: -10,
                opacity: 0 
              }}
            >
              {solutionArray[6]}
            </motion.div>
      </AnimatePresence>

  </div>
  )
}

export default SolutionDisplay