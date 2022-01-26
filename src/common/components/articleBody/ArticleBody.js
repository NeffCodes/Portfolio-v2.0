import { motion } from 'framer-motion'

import styles from "./ArticleBody.module.css"

//motion variants
let easing = [0.175, 0.85, 0.42, 0.96];

const containerVariants = {
  hidden: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing, staggerChildren: 0.2 }
  }
};

export default function ArticleBody({ children }) {
  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  )
}