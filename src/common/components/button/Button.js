import Link from 'next/link'
import styles from './Button.module.css'

export default function InternalButton({destination, children}) {
    return (
      <Link href={destination} >
        <a className={styles.button} role="button">
          {children}
        </a>
      </Link>
    )
};