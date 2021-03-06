import { motion } from 'framer-motion'

import { FiExternalLink } from 'react-icons/fi'
import styles from './ArticleHeader.module.css'

//motion variants
let ease = [0.175, 0.85, 0.42, 0.96];

const variants = {
  initial: { 
    x: -100, 
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
    }
  },
  exit: {
    x: -100,
    opacity: 0, 
    transition: { 
      duration: 0.4, 
      ease: ease 
    } 
  }
};

export default function ArticleHeader ({
  position = ["Creator"],
  organization,
  work,
  stack,
  source,
  site,
}) {
  return (
    <motion.aside 
      className={styles.container}
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className={styles.item}>
        <h3 className={styles.item_title}>Position</h3>
        <ul>
          {position.map( pos => { 
            return(
              <li key={pos}>{pos}</li>
            )
          })}
        </ul>
      </div>

      {organization && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Organization</h3>
          <ul>
            {organization.map( org => { 
              return(
                <li key={org}>{org}</li>
              )
            })}
          </ul>
        </div>
      )}

      {work && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Work</h3>
          <ul>
            {work.map( work => { 
              return(
                <li key={work}>{work}</li>
              )
            })}
          </ul>
        </div>
      )}


      {stack && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Tools</h3>
          <ul>
            {stack.map( stack => { 
              return(
                <li key={stack}>{stack}</li>
              )
            })}
          </ul>
        </div>
      )}


      {source && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Source</h3>
          <div className={styles.link_container}>
              <a
                href={source.link}
                target='_blank' 
                rel="noreferrer"
                aria-label={source.text}
                className={styles.link}
              >
                {source.text}
              </a>
              <FiExternalLink/>
          </div>
        </div>
      )}

      {site && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Site</h3>
          <div className={styles.link_container}>
              <a
                href={site.link}
                target='_blank' 
                rel="noreferrer"
                aria-label={site.text}
                className={styles.link}
              >
                {site.text}
              </a>
              <FiExternalLink/>
          </div>

        </div>
      )}
    </motion.aside>
  );
}