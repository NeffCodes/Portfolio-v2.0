// import styles from "./ArticleBody.module.css"
import Link from 'next/link'
import { projectTileData } from '../../utils/project-list'

const findData = (arr, key) => {
  let current, next, nextnext;

  for(let i=0;i<arr.length;i++){
    if(arr[i].key === key){
      current = arr[i].value;
      
      if(arr[i+1]){
        next = arr[i+1].value;
        nextnext = (arr[i+2] && arr[i+2].value) || arr[0].value;
      } else {
        next = arr[0].value
        nextnext = arr[1].value;
      }
    }
  }

  return {current, next, nextnext};
}



export default function OtherProjects({current}) {
  const tileData = findData(projectTileData,current);
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