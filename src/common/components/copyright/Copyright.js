import paths from '../socials/paths'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from './Copyright.module.css'

export default function Copyright(){
  //framer motion animation control
  const initialState = {opacity: 0, y: 6};
  const animationControl = useAnimation();
  //hook to allow us to control the element in the screen view
  const { inView, ref } = useInView(); 
  
  if(inView){
    animationControl.start({
      opacity:1, 
      y:0,
      transition:{ 
        delay: 0.4, 
        duration: 0.6,
      },
    })
  }

  return (
    <div ref={ref} className={styles.copyrightContainer}>
      <div className={styles.copyright}>
       <motion.nav 
          initial={initialState}
          animate={animationControl}
          className={styles.linkContainer}
        >
          <ul className={styles.socials}>
            <li className={styles.listItem}>
                <a 
                href={paths.social.github.path}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='GitHub'
                className={styles.link}
                >
                    github
                </a>
            </li>
            <li className={styles.listItem}>
                <a 
                href={paths.social.linkedin.path}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='LinkedIn'
                className={styles.link}
                >
                    linkedin
                </a>
            </li>
            <li className={styles.listItem}>
                <a 
                href={paths.social.codepen.path}
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
            initial={initialState}
            animate={animationControl}    
        >
            <p className={styles.text}>Copyright &#169; {new Date().getFullYear()} James Neff</p>
        </motion.div>
      </div>
    </div>
  )
}
