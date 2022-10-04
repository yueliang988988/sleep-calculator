import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const LoadingNews = () => {

  return (

  <>
      <div
        className='flex flex-col justify-center items-center gap-4 p-2 w-full'
      >
        <AnimatePresence>
          <motion.div
            key="loader"
            className=' w-28 h-28 bg-slate-300 rounded-md mt-12'
            initial={{ opacity: 1 }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [180, 90, 45]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
          >
            
          </motion.div>
        </AnimatePresence>
      </div>
  </>

  )
}

export default LoadingNews