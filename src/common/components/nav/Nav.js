import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import logo from '../../../../public/assets/logo.svg'
import styles from './Nav.module.css'

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, transition: {duration: 0.6} },
  hidden: { opacity: 0 },
}

export default function Nav(){
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <motion.a
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.6}}
            >
              <div className={styles.logoContainer}>
                <Image src={logo} alt="James Neff Logo" />
              </div>
            </motion.a>
          </Link>
          <div className={styles.linkContainer}>
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={list}
              className={styles.list}
            >
              <motion.li variants={item}>
                <Link href="/">
                  <a className={styles.link}>
                    Work
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/">
                  <a className={styles.link}>
                    About
                    {/* <div className={styles.underline}></div> */}
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/">
                  <a className={styles.link}>
                    Contact
                  </a>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </nav>
      </header>
    )
}