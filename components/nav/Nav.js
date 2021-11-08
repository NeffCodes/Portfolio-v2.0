import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/assets/logo.svg'
import styles from './Nav.module.css'



export default function Nav(){
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <div className={styles.logoContainer}>
                <Image src={logo} alt="James Neff Logo" />
              </div>
            </a>
          </Link>
          <div className={styles.linkContainer}>
            <ul className={styles.list}>
              <li>
                <Link href="/">
                  <a className={styles.link}>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={styles.link}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={styles.link}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}