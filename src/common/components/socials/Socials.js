import paths from '../paths'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconContext } from 'react-icons/lib';

import {FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa';
import styles from './Socials.module.css'


export default function Socials() {
  const social = paths.social;
  //hook to allow us to control the element in the screen view
  const { inView, ref } = useInView(); 
  //framer motion animation controls
  const lineControls = useAnimation();
  const iconControls = useAnimation();
  //variants
  const lineVariants = {
    hidden: { opacity: 0, flex: 0 },
    grow: { 
      opacity: 1, 
      flex: "1 1 0",
      transition:{ 
        ease: "easeInOut",
        delay: 0.2, 
        duration: 0.6,
      }, 
    },
  };
  const iconVariants = {
    hidden: { opacity: 0},
    visible: { 
      opacity: 1, 
      transition:{
        ease: "easeInOut",
        delay: 0.2, 
        duration: 0.6,
      }
    },
  }

  if(inView) {
    lineControls.start("grow")
    iconControls.start("visible")
  }

  return (
    <div 
      ref={ref} 
      className={styles.socialContainer}
    >
      <motion.div 
        variants={lineVariants}
        initial="hidden"
        animate={lineControls}
        className={styles.line}
      />

      <IconContext.Provider value={{size: "1.625em"}}>
        <div 
          className={styles.iconContainer}
        >
          <motion.a
            variants={iconVariants}
            initial="hidden"
            animate={iconControls}
            href={social.github.path}
            title={social.github.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='GitHub'
            className={styles.icon}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={iconVariants}
            initial="hidden"
            animate={iconControls}
            href={social.linkedin.path} 
            title={social.linkedin.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.icon}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            variants={iconVariants}
            initial="hidden"
            animate={iconControls}
            href={social.codepen.path}
            title={social.codepen.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='CodePen'
            className={styles.icon}
          >
            <FaCodepen />
          </motion.a>
        </div>
      </IconContext.Provider>
    </div>
  )


}