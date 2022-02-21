import { externalPaths } from '../../context/external-path-list'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons/lib';

import {FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa';
import styles from './Socials.module.css'

  //motion variants
  const lineVariants = {
    initial: { opacity: 0, flex: 0 },
    grow: { 
      opacity: 1, 
      flex: "1 1 0",
      transition:{ 
        delay: 0.2, 
        duration: 0.6,
      }, 
    },
  };

  const iconContainer = {
    initial: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition:{
        delay: 0.5,
        staggerChildren: 0.2
      }
    },
  }

  const socialIcon = {
    initial: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: {
        duration: 1,
      },
    }
  }

  const socialHover = {
    filter: "drop-shadow(0 4px 1px var(--navy-dark))",
    scale: 1.1,
    transition: {
      duration: 0.1
    }
  }

export default function Socials() {
  const social = externalPaths.social;

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.line}
        initial="initial"
        whileInView="grow"
        viewport={{ once: true }}
        variants={lineVariants}
      />

      <IconContext.Provider value={{size: "1.75em", color: "var(--white-navy-tint)"}}>
        <motion.div 
          className={styles.icon_container}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconContainer}
        >
          <motion.a
            className={styles.icon}
            whileHover={socialHover}
            whileFocus={socialHover}
            variants={socialIcon}
            href={social.github.path}
            title={social.github.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='GitHub'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            className={styles.icon}
            whileHover={socialHover}
            whileFocus={socialHover}
            variants={socialIcon}
            href={social.linkedin.path} 
            title={social.linkedin.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            className={styles.icon}
            whileHover={socialHover}
            whileFocus={socialHover}
            variants={socialIcon}
            href={social.codepen.path}
            title={social.codepen.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='CodePen'
          >
            <FaCodepen />
          </motion.a>
        </motion.div>
      </IconContext.Provider>
    </div>
  )


}