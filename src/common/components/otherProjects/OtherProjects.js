import Link from 'next/link'
import { motion } from 'framer-motion'

import { sortedData } from '../../context/project-list'
import { findTileLoopData } from '../../utils/tile-data-functions'

import styles from "./OtherProjects.module.css"

const container = {
  visible: {
    transition: {
      staggerChildren: .2,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  },
}

const link = {
  initial: { 
    y: -30, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.48, 0.15, 0.25, 0.96], 
    } 
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  },
};


export default function OtherProjects({current}) {
  const {next, nextnext} = findTileLoopData(sortedData,current);

  return (
    <motion.div 
      className={styles.container} 
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      exit="exit"
      variants={container}
    >
      <div className={styles.title_container}>
        <h2 className={styles.title}>Other Projects.</h2>
        <div className="line" /> 
      </div>
      
      <div className={styles.link_container}>
        <article className={styles.link_card}>
          <Link href={next.value.slug}  > 
            <motion.div 
              variants={link}
            >
              <h3 className={styles.link_title}>{next.value.title}</h3>
              <p>{next.value.description}</p>
              <a className={styles.link}>View Project &rarr;</a>
            </motion.div>
          </Link>
        </article>

        <article className={styles.link_card}>
          <Link href={nextnext.value.slug} > 
            <motion.div 
              variants={link}
            >
              <h3 className={styles.link_title}>{nextnext.value.title}</h3>
              <p>{nextnext.value.description}</p>
              <a className={styles.link}>View Project &rarr;</a>
            </motion.div>
          </Link>
        </article>
      </div>
    </motion.div>
  )
}