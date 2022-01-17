import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
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
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} site_width_container`}>
        <motion.ul 
            initial="hidden"
            animate="visible"
            variants={list}
            className={styles.container}
          >
          <li className={styles.logo_container}>
            <Link href={{pathname:'/', hash:'hero'}}>
              <motion.a
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.6}}
                tabIndex="0"
                aria-label='Home'
                className={styles.logo}
              >
                <Image 
                  src={logo} 
                  alt="James Neff Logo" 
                  width={24} 
                  height={24}
                />
              </motion.a>
            </Link>
          </li>
          <motion.li variants={item} className={styles.list_item}>
            <Link href={{pathname:'/', hash: 'work'}}>
              <a className={styles.link}>
                Work
              </a>
            </Link>
          </motion.li>
          <motion.li variants={item} className={styles.list_item}>
            <Link href={{pathname:'/', hash: 'about'}}>
              <a className={styles.link}>
                About
              </a>
            </Link>
          </motion.li>
          <motion.li variants={item} className={styles.list_item}>
            <Link href={{pathname: router.pathname, hash: 'contact'}}>
              <a className={styles.link}>
                Contact
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  )
}