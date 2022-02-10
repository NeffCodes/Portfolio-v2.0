import { motion } from 'framer-motion'

import styles from "./ArticleBody.module.css"

//motion variants
let ease = [0.175, 0.85, 0.42, 0.96];

const variants = {
  initial: { 
    x: 100, 
    opacity: 0, 
    transition: {
      duration: 0.5, 
      ease: ease 
    } 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      delay: 0.4,
      duration: 0.5, 
      ease: ease, 
      staggerChildren: 0.2 
    }
  },
  exit: {
    x: 100,
    opacity: 0, 
    transition: { 
      duration: 0.4, 
      ease: ease 
    } 
  }
};

export default function ArticleBody({ children }) {
  return (
    <motion.div 
      className={styles.container}
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}