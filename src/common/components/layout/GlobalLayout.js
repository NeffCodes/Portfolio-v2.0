import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import styles from './GlobalLayout.module.css'

export default function GlobalLayout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      
      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}