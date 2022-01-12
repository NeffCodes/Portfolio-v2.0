import Head from 'next/head'
import Image from 'next/image'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'

import styles from '../../styles/ArticlePage.module.css'

import trihex from '/public/assets/trihex.svg'


const position  = ["Creator"]; 
const organization = ["Course Project"]; 
const work = ["Web Design", "Front-end Development"]; 
const stack = ["React", "Redux", "Reddit API", "Figma", "Netlify"]; 
const source = {text:"GitHub", link: "https://github.com/persigio/mini-reddit"}; 
const site = {text:"View Live", link: "https://jneff-mini-reddit.netlify.app/"}; 

const ArticlePage = () => {
  return(
    <div className={styles.container}>
      <Head>
        <title>JNeff: Mini Reddit</title>
      </Head>
      <article>
        <h1 className={styles.title}>Mini Reddit</h1>
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
                This project is a portfolio piece from Codecademy's Front-End 
                Engineer course. The goal of the project was to design, develop, 
                and document a website that displays minimal content provided by 
                Reddit's API using React &#38; Redux. The application allows users to 
                view and search posts and comments provided by the API.
              </p>
              <h3>project requirements</h3>
              <ul className={styles.list}>
                <li>
                  Build the application using React and Redux
                </li>
                <li>
                  Users can use the application on any device
                </li>
                <li>
                  Users can search the data using terms
                </li>
                <li>
                  Version control your application with Git and host the repository on GitHub
                </li>
                <li>
                  Users see an initial view of the data on first load of the app
                </li>
                <li>
                  Users can filter the data based on categories that are predefined
                </li>
                <li>
                  Get 90+ scores on Lighthouse (with the exception of Performance if it is realted to the media assets provided from Reddit)
                </li>
              </ul>
            </section>
            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>My <span className='accent'>Approach.</span></h2>
              <p>
                Like most of my projects, I started this project out with pen and paper, 
                writing out the sitemap and roughly sketching different layouts. Once I had 
                a fairly good idea of how I wanted it to look, I transcribed the layout 
                into Figma and started working on the scheme. Once I had the scheme roughly 
                where I wanted it, and a good visual target of how I wanted the site to look, 
                I started the actual coding, building each component and updating my store as 
                I went.
              </p>
              <p>
                After I built out the site to the specified requirements, I started to 
                fiddle around to add in a couple features that I thought would be more useful, 
                like seeing replies to the comments. Once I had the functionality in, I went 
                back and adjusted the styling to make it look cleaner.
              </p>
            </section>
              <div className={`${styles.row_third} ${styles.align_center}`}>
              <Image src={trihex} layout="intrinsic" />
              </div>
            <section className={styles.row_full}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                Once the design was finalized, we provided the design specs to the 
                IT department who handled the task of developing and maintaining the site.
              </p>
            </section>
          </ArticleBody>
        </div>
      </article>

      <OtherProjects current="reddit"/>
    </div>
  )
}

export default ArticlePage;