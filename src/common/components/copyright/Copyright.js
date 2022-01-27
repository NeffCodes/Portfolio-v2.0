import { externalPaths } from '../../context/external-path-list'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from './Copyright.module.css'

export default function Copyright(){
  const variant = {
    hidden: { 
      opacity: 0, 
      y: 6 
    },
    animate: {
      opacity:1, 
      y:0,
      transition:{ 
        delay: 0.2, 
        duration: 0.3,
      }
    },
  }

  return (
    <div 
      className={styles.container}>
      <div className={`${styles.copyright} site_width_container`}>
       <motion.nav 
          initial="hidden"
          whileInView="animate"
          exit="hidden"
          variants={variant}
          className={styles.link_container}
        >
          <ul className={styles.socials}>
            <li className={styles.list_item}>
                <a 
                href={externalPaths.social.github.path}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='GitHub'
                className={styles.link}
                >
                    github
                </a>
            </li>
            <li className={styles.list_item}>
                <a 
                href={externalPaths.social.linkedin.path}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='LinkedIn'
                className={styles.link}
                >
                    linkedin
                </a>
            </li>
            <li className={styles.list_item}>
                <a 
                href={externalPaths.social.codepen.path}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='CodePen'
                className={styles.link}
                >
                    codepen
                </a>
            </li>
          </ul>
        </motion.nav>

        <motion.div 
          initial="hidden"
          whileInView="animate"
          exit="hidden"
          variants={variant}    
        >
            <p className={styles.text}>Copyright &#169; {new Date().getFullYear()} James Neff</p>
        </motion.div>
      </div>
    </div>
  )
}
