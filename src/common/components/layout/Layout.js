import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}