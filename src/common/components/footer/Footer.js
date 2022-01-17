import { externalPaths } from '../../context/external-path-list'
import Socials from '../socials/Socials'
import Copyright from '../copyright/Copyright'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.contact}>
          <div id="contact" className={styles.text}>
            <Socials/>
            <h2> Say <span className='accent'>hello.</span></h2>
            <p>Looking for a developer or designer to join your team? Feel free to reach out:</p>
            <a href={`mailto:${externalPaths.email}`} className={styles.email}>{externalPaths.email}</a>
          </div>
          <div className={styles.image}></div>
        </div>
          
      </div>
      <Copyright />
    </footer>
  )
}