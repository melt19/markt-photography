import React from "react";
import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: '2vh'
  },
  in: {
    opacity: 1,
    y: '0vh',
  },
  out: {
    opacity: 0,
    y: '-2vh'
  },
}
const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.75,
};


export const pageTransitionWrapper = (element: React.ReactElement): React.ReactElement => {
  return (
    <motion.div
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {element}
    </motion.div>
  )
}