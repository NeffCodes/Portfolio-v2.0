import styles from './ArticleHeader.module.css';

export default function ArticleHeader ({
  position = ["Creator"],
  organization,
  work,
  stack,
  source,
  site,
}) {
  return (
    <aside className={styles.container}>
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
          <h3 className={styles.item_title}>Stack</h3>
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
          <a
            href={source.link}
            target='_blank' 
            rel="noreferrer"
          >
            {source.text}
          </a>
        </div>
      )}

      {site && (
        <div className={styles.item}>
          <h3 className={styles.item_title}>Site</h3>
          <a
            href={site.link}
            target='_blank' 
            rel="noreferrer"
          >
            {site.text}
          </a>
        </div>
      )}
      
    </aside>
  );
}