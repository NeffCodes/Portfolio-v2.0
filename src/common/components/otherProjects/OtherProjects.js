// import styles from "./ArticleBody.module.css"
import Link from 'next/link'
import { projectTileData } from '../../utils/project-list'
import { findTileData } from '../../utils/findTileData';

export default function OtherProjects({current}) {
  const tileData = findTileData(projectTileData,current);
  console.log(tileData);

  return (
    <div>
    <h2>Other Projects.</h2>
      <Link href={tileData.next.slug}> 
        <a>
          <h3>{tileData.next.title}</h3>
          <p>{tileData.next.description}</p>
        </a>
      </Link>
      <Link href={tileData.nextnext.slug}> 
        <a>
          <h3>{tileData.nextnext.title}</h3>
          <p>{tileData.nextnext.description}</p>
        </a>
      </Link>
    </div>
  )
}