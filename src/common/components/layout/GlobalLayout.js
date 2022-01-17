import Head from 'next/head'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import styles from './GlobalLayout.module.css'

export default function GlobalLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#181d25"/>
        <meta name="description" content="Hello! This is James Neff's personal online portfolio website of his graphic design and front-end development projects. " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>
      <Nav />
      
      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}