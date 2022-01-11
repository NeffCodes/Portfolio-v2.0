import Link from 'next/link'
import { projectTileData } from '../../utils/project-list'
import { findTileData } from '../../utils/findTileData'

import styles from "./OtherProjects.module.css"

export default function OtherProjects({current}) {
  const tileData = findTileData(projectTileData,current);
  console.log(tileData);

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Other Projects.</h2>
        <div className="line" /> 
      </div>
      
      <div className={styles.link_container}>
        <Link href={tileData.next.slug}> 
          <article className={styles.link_card}>
            <h3 className={styles.link_title}>{tileData.next.title}</h3>
            <p>{tileData.next.description}</p>
            <a className={styles.link}>View Project &rarr;</a>
          </article>
        </Link>
        <Link href={tileData.nextnext.slug}> 
          <article className={styles.link_card}>
            <h3 className={styles.link_title}>{tileData.nextnext.title}</h3>
            <p>{tileData.nextnext.description}</p>
            <a className={styles.link}>View Project &rarr;</a>
          </article>
        </Link>
      </div>
    </div>
  )
}