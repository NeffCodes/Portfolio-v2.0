import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { projectTileData } from '../../context/project-list'
import { findTileLoopData } from '../../utils/tile-data-functions'

import styles from "./OtherProjects.module.css"

const containerVariants = {
  visible: {
    transition: {
      delayChildren: .8,
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
      // delay: 1.5,
      ease: [0.48, 0.15, 0.25, 0.96], 
    } 
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  },
};


export default function OtherProjects({current}) {
  const tileData = findTileLoopData(projectTileData,current);
  //hook to allow us to control the element in the screen view
  const { inView, ref } = useInView(); 
  //framer motion animation controls
  const boxControls = useAnimation();

  if(inView) {
    boxControls.start("visible");
    console.log("inview")
  }

  return (
    <motion.div 
      initial="initial"
      animate={boxControls}
      exit="exit"
      variants={containerVariants}
      className={styles.container} 
    >
      <div className={styles.title_container}>
        <h2 className={styles.title}>Other Projects.</h2>
        <div className="line" /> 
      </div>
      
      <div ref={ref} className={styles.link_container}>
        <article className={styles.link_card}>
          <motion.div variants={linkVariants}>
            <Link href={tileData.next.slug}  variants={linkVariants}> 
              <>
                <h3 className={styles.link_title}>{tileData.next.title}</h3>
                <p>{tileData.next.description}</p>
                <a className={styles.link}>View Project &rarr;</a>
              </>
            </Link>
          </motion.div>
        </article>
        <article className={styles.link_card}>
        <motion.div variants={linkVariants}>
          <Link href={tileData.nextnext.slug}> 
            <>
              <h3 className={styles.link_title}>{tileData.nextnext.title}</h3>
              <p>{tileData.nextnext.description}</p>
              <a className={styles.link}>View Project &rarr;</a>
            </>
          </Link>
        </motion.div>
        </article>
      </div>
    </motion.div>
  )
}