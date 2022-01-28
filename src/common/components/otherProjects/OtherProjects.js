import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { projectTileData } from '../../context/project-list'
import { findTileLoopData } from '../../utils/tile-data-functions'

import styles from "./OtherProjects.module.css"

const containerVariants = {
  visible: {
    transition: {
      delayChildren: .6,
      staggerChildren: .3,
    }
  }
}

const linkVariants = {
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
  const tileData = findTileLoopData(projectTileData,current);

  return (
    <motion.div 
      initial="initial"
      exit="exit"
      whileInView="visible"
      viewport={{ once:true }}
      variants={containerVariants}
      className={styles.container} 
    >
      <div className={styles.title_container}>
        <h2 className={styles.title}>Other Projects.</h2>
        <div className="line" /> 
      </div>
      
      <div className={styles.link_container}>
        <article className={styles.link_card}>
          <Link href={tileData.next.slug}  scroll={false}> 
            <motion.div variants={linkVariants}>
              <h3 className={styles.link_title}>{tileData.next.title}</h3>
              <p>{tileData.next.description}</p>
              <a className={styles.link}>View Project &rarr;</a>
            </motion.div>
          </Link>
        </article>

        <article className={styles.link_card}>
          <Link href={tileData.nextnext.slug} scroll={false}> 
            <motion.div variants={linkVariants}>
              <h3 className={styles.link_title}>{tileData.nextnext.title}</h3>
              <p>{tileData.nextnext.description}</p>
              <a className={styles.link}>View Project &rarr;</a>
            </motion.div>
          </Link>
        </article>
      </div>
    </motion.div>
  )
}