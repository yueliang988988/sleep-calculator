import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {SolutionArrayMsg} from './TimePicker'

// type SolutionDisplayProps = {
//   solutionArray: string[]
// }
type SolutionDisplayProps = {
  solutionArrayMsg: SolutionArrayMsg
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({solutionArrayMsg}) => {
  
  return (
    <>
  <div className='flex flex-row justify-start items-start gap-4 flex-wrap'>

      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[0]}
              className="italic font-bold font-serif text-lg text-red-700"
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
              {solutionArrayMsg.solArray[0]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[1]}
              className="italic font-bold font-serif text-lg text-orange-700"
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
              {solutionArrayMsg.solArray[1]}
            </motion.div>
      </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[2]}
              className="italic font-bold font-serif text-lg text-orange-600"
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
              {solutionArrayMsg.solArray[2]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[3]}
              className="italic font-bold font-serif text-lg text-yellow-500"
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
              {solutionArrayMsg.solArray[3]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[4]}
              className="italic font-bold font-serif text-lg text-lime-500"
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
              {solutionArrayMsg.solArray[4]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[5]}
              className="italic font-bold font-serif text-lg text-lime-500"
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
              {solutionArrayMsg.solArray[5]}
            </motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
            <motion.div
              key={solutionArrayMsg.solArray[6]}
              className="italic font-bold font-serif text-lg text-lime-500"
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
              {solutionArrayMsg.solArray[6]}
            </motion.div>
      </AnimatePresence>

  </div>
  <AnimatePresence exitBeforeEnter>
    <motion.u 
      key={solutionArrayMsg.solMsg}
      className=' mt-[-1rem] text-lg'
      initial={{
        y: 10,
        opacity: 0,
      }}
      transition={{
        delay: 0.75,
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
                {solutionArrayMsg.solMsg}
    </motion.u>
  </AnimatePresence>
  </>
  )
}

export default SolutionDisplay