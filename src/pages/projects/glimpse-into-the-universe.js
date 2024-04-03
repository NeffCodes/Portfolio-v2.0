import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'
import { IconContext } from 'react-icons/lib'
import { FiExternalLink } from 'react-icons/fi'

import styles from '../../styles/ArticlePage.module.css'

import trihex from '/public/assets/trihex.svg'

const position  = ["Creator"]; 
const organization = ["Personal Project"]; 
const work = ["Web Design", 'UI / UX']; 
const stack = ['NASA API','Netlify','Postman']; 
const source = {text:"GitHub", link: "https://github.com/NeffCodes/universe"}; 
const site = {text:"View Live", link: "https://glimpse-universe.netlify.app/"}; 

const variants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 }
}

const ArticlePage = () => {
  return(
    <motion.div 
      className={`${styles.container} site_width_container`}
      initial="initial"
      animate="visible"
      exit="initial"
      variants={variants}
    > 
      <Head>
        <title>JNeff: Glimpse into the Universe</title>
      </Head>
      <article>
        <a href={site.link} target="_blank" className={styles.title_container}>
          <h1 className={styles.title}>Glimpse into the Universe</h1>
          <IconContext.Provider value={{size: "1em"}}>
            <FiExternalLink/> 
          </IconContext.Provider>
        </a>
        <div className={styles.article_container}>
          <ArticleHeader 
            position={position}
            organization={organization}
            work={work}
            stack={stack}
            source={source}
            site={site}
          />

          <ArticleBody>
            <section className={styles.row_full}>
              <div className="line" />
              <h2>The <span className='accent'>Challenge.</span></h2>
              <p>
                I wanted to create a site that allowed a user to see multiple images provided by <a href='https://apod.nasa.gov/apod/astropix.html' target='_blank' className={styles.link}>NASA's Astronomy Picture of the Day API</a> on the same page. The user would be able to click on an image to get more information about the picture provided, with explanations written by professional astronomers. 
              </p>
            </section>
            <section className={styles.row_full}>
              <div className="line" />
              <h2>My <span className='accent'>Approach.</span></h2>
              <p>
                After reading the documentation provided by NASA, I started by planning out how I wanted to display the provided data. Per the documentation, to pull multiple images from their api, I could either get a count of random images or pull from a specific date range. I wanted to allow users to view the most recent submissions, so I decided to write some code to find the necessary date range based on the current date whenever a visitor comes to the site. 
              </p>
              <p>
                Once I finalized the functionality of the data pull, I was able to work on how I wanted to display the data. I went with a simple tiled photo gallery that covered the full screen to allow the user to see multiple images at the same time. 
              </p>
              <p>
                While working on the overall design of the site, I noticed the explanations provided from NASA could vary in length. This lead me to revise my original plan of having a small description box to instead be a scrollable frame to allow users to be able to read the full description, regardless of length.
              </p>
            </section>

            <section className={styles.row_full}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                You can view the site <a href={site.link} target="_blank" className={styles.link}>live</a>  or you can view the <a href={source.link} target="_blank" className={styles.link}>source code</a>. 
              </p>
            </section>
          </ArticleBody>
        </div>
      </article>

      <OtherProjects current="universe"/>
    </motion.div>
  )
}

export default ArticlePage;