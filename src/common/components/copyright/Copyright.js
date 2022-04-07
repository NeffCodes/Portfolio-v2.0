import { externalPaths } from '../../context/external-path-list'
import { motion } from 'framer-motion'

import styles from './Copyright.module.css'

export default function Copyright(){
  const variant = {
    initial: { 
      opacity: 0, 
      y: 6 
    },
    visible: {
      opacity:1, 
      y:0,
      transition:{ 
        delay: 0.2, 
        duration: 0.3,
      }
    },
  }

  const socials = externalPaths.social;

  return (
    <div 
      className={styles.container}>
      <div className={`${styles.copyright} site_width_container`}>
       <motion.nav 
          initial="initial"
          whileInView="visible"
          exit="initial"
          variants={variant}
          className={styles.link_container}
        >
          <ul className={styles.socials}>
            { Object.entries(socials).map( obj => {
              const [social,data] = obj
              return (
                <li className={styles.list_item}>
                  <a 
                  href={data.path}
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label={data.title}
                  className={styles.link}
                  key={`${social}-copyright`}
                  >
                      {social}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>

        <motion.div 
          initial="initial"
          whileInView="visible"
          exit="initial"
          variants={variant}    
        >
            <p className={styles.text}> This site was designed and coded all by me! <br/> Copyright &#169; {new Date().getFullYear()} James Neff</p>
        </motion.div>
      </div>
    </div>
  )
}
