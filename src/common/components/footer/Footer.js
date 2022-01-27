import { motion } from 'framer-motion'

import { externalPaths } from '../../context/external-path-list'
import Socials from '../socials/Socials'
import Copyright from '../copyright/Copyright'
import styles from './Footer.module.css'

//motion variants
let easing = [0.175, 0.85, 0.42, 0.96];

const containerVariants = {
  hidden: { 
    x: -50, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      ease: easing 
    } 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      delay: 0.1, 
      duration: 0.5, 
      ease: easing, 
      delayChildren: .8,
      staggerChildren: 0.2 
    }
  },
};

export default function Footer(){
  return (
    <footer>
      <div className={styles.container}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={containerVariants}
          className={styles.contact}
        >
          <div id="contact" className={styles.text}>
            <Socials/>
            <h2> Say <span className='accent'>hello.</span></h2>
            <p>Looking for a developer or designer to join your team? Feel free to reach out:</p>
            <a href={`mailto:${externalPaths.email}`} className={styles.email}>{externalPaths.email}</a>
          </div>
          <div className={styles.image}></div>
        </motion.div>
          
      </div>
      <Copyright />
    </footer>
  )
}