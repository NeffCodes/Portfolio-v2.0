import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'

import styles from '../../styles/ArticlePage.module.css'

import oldphoto1 from '/public/assets/project/golden/oldphoto1.png';
import newphoto1 from '/public/assets/project/golden/home.jpg';
import newphoto2 from '/public/assets/project/golden/about.jpg';
import newphoto3 from '/public/assets/project/golden/contact.jpg';


const position  = ["Designer", "Developer"]; 
const organization = ["Golden Rule Food Pantry Inc."]; 
const work = ["Wordpress", "Front-end Development"]; 
const stack = ["Figma","WordPress"]; 
const source = null;
const site = {text:"View Live", link: "https://www.goldenrulefp.net/"}; 

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
        <title>JNeff: Golden Rule Food Pantry</title>
      </Head>
      <article>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Golden Rule Food Pantry</h1>
        </div>
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
                The client approached me with concerns about their outdated WordPress website. Dissatisfied with the current presentation and imagery, they expressed a keen interest in modernizing their platform to better resonate with their audience.
              </p>

              <h3>Original Screenshot:</h3>
              <div className={`${styles.row_full} ${styles.dropshadow}`}>
                <Image 
                  src={oldphoto1} 
                  alt="Original homepage"
                  layout="responsive" 
                  placeholder="blur"
                />
              </div>  
            </section>



            <section className={styles.row_full}>
              <div className="line" />
              <h2>My <span className='accent'>Ongoing Process.</span></h2>
              <p>
                Following a comprehensive meeting to ascertain their objectives, I immersed myself in researching and analyzing various non-profit websites to identify contemporary design trends and effective strategies. Drawing upon this research, I crafted a new design envisioning the potential transformation of the site. Presenting the client with multiple design options along with corresponding quotes facilitated an informed decision-making process.
                </p>
                <p>
                Subsequently, through constructive dialogue with the client, we collaboratively determined which changes to prioritize. Negotiating and refining the scope of the project ensured alignment with the client's vision and budget.
              </p>

              <div className={`${styles.row_full} ${styles.dropshadow}`}>
                <h3>New Homepage</h3>
                <Image 
                  src={newphoto1} 
                  alt="Original homepage"
                  layout="responsive" 
                  placeholder="blur"
                />
              </div> 
              <div className={`${styles.row_full} ${styles.dropshadow}`}>
                <h3>New About Page</h3> 
                <Image 
                  src={newphoto2} 
                  alt="Original homepage"
                  layout="responsive" 
                  placeholder="blur"
                />
              </div>  
              <div className={`${styles.row_full} ${styles.dropshadow}`}>
                <h3>New Contact Page</h3> 
                <Image 
                  src={newphoto3} 
                  alt="Original homepage"
                  layout="responsive" 
                  placeholder="blur"
                />
              </div>  
            </section>


            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>Current <span className='accent'>Status.</span></h2>
              <p>
                Currently, I am in the process of implementing the agreed-upon updates, working diligently to revitalize and elevate the client's online presence.
              </p>
            </section>

          </ArticleBody>
        </div>
      </article>

      <OtherProjects current="golden"/>
    </motion.div>
  )
}

export default ArticlePage;