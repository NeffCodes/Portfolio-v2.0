import { externalPaths } from '../../context/external-path-list'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons/lib';

import {FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa';
import styles from './Socials.module.css'

  //motion variants
  const lineVariants = {
    hidden: { opacity: 0, flex: 0 },
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
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition:{
        delay: 0.5,
        staggerChildren: 0.2
      }
    },
  }

  const socialIcon = {
    hidden: { opacity: 0, x: -16 },
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
        variants={lineVariants}
        initial="hidden"
        whileInView="grow"
        className={styles.line}
        viewport={{ once: true }}
      />

      <IconContext.Provider value={{size: "1.75em", color: "var(--white-navy-tint)"}}>
        <motion.div 
          className={styles.icon_container}
          variants={iconContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            variants={socialIcon}
            whileHover={socialHover}
            whileFocus={socialHover}
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
            variants={socialIcon}
            whileHover={socialHover}
            whileFocus={socialHover}
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
            variants={socialIcon}
            whileHover={socialHover}
            whileFocus={socialHover}
            variants={socialIcon}
            href={social.codepen.path}
            title={social.codepen.title}
            rel='noopener noreferrer'
            target='_blank'
            aria-label='CodePen'
            className={styles.icon}
          >
            <FaCodepen />
          </motion.a>
        </motion.div>
      </IconContext.Provider>
    </div>
  )


}