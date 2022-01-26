import { motion } from 'framer-motion'

import { FiExternalLink } from 'react-icons/fi'
import styles from './ArticleHeader.module.css'

//motion variants
let easing = [0.175, 0.85, 0.42, 0.96];

const containerVariants = {
  hidden: { x: -100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing, staggerChildren: 0.2 }
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.container}
    >
      <motion.div className={styles.item}>
        <h3 className={styles.item_title}>Position</h3>
        <ul>
          {position.map( pos => { 
            return(
              <li key={pos}>{pos}</li>
            )
          })}
        </ul>
      </motion.div>

      {organization && (
        <motion.div className={styles.item}>
          <h3 className={styles.item_title}>Organization</h3>
          <ul>
            {organization.map( org => { 
              return(
                <li key={org}>{org}</li>
              )
            })}
          </ul>
        </motion.div>
      )}

      {work && (
        <motion.div className={styles.item}>
          <h3 className={styles.item_title}>Work</h3>
          <ul>
            {work.map( work => { 
              return(
                <li key={work}>{work}</li>
              )
            })}
          </ul>
        </motion.div>
      )}


      {stack && (
        <motion.div className={styles.item}>
          <h3 className={styles.item_title}>Tools</h3>
          <ul>
            {stack.map( stack => { 
              return(
                <li key={stack}>{stack}</li>
              )
            })}
          </ul>
        </motion.div>
      )}


      {source && (
        <motion.div className={styles.item}>
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
        </motion.div>
      )}

      {site && (
        <motion.div className={styles.item}>
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

        </motion.div>
      )}
    </motion.aside>
  );
}