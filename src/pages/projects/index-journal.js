import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'
import { IconContext } from 'react-icons/lib'
import { FiExternalLink } from 'react-icons/fi'

import styles from '../../styles/ArticlePage.module.css'

import hero from '/public/assets/project/indexjournal/ijhero.webp'
import trihex from '/public/assets/trihex.svg'

const position  = ["Lead Designer"]; 
const organization = ["Index-Journal"]; 
const work = ["UI / UX", "Web Design"]; 
const stack = ["Photoshop", "Illustrator","Pen & Paper"]; 
const site = {text:"View Archive", link: "https://web.archive.org/web/20141217230315/http://indexjournal.com/"}; 
const currentId = 'indexjournal';

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
        <title>JNeff: IJ Redesign</title>
      </Head>
      <article>
        <a href={site.link} target="_blank" className={styles.title_container}>
          <h1 className={styles.title}>Index-Journal's Website Redesign</h1>
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
            site={site}
          />

          <ArticleBody>
            <div className={`${styles.row_full} ${styles.dropshadow}`}>
              <Image 
                src={hero} 
                alt="Final Approved Design"
                width={2000} 
                height={545} 
                layout="responsive" 
                placeholder="blur"
              />
            </div>  

            <section className={styles.row_full}>
              <div className="line" />
              <h2>The <span className='accent'>Challenge.</span></h2>
              <p>
                When Index-Journal switched content management systems to Newscycle Solutions, 
                we had an opportunity to completely revamp and overhaul the website. I was 
                tasked with researching other popular news sites at the time and then 
                coming up with the overall layout and design for how the new site would be.
              </p>
            </section>

            <div className={`${styles.row_third} ${styles.align_center}`}>
              <Image src={trihex} layout="intrinsic" />
            </div>
            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>My <span className='accent'>Process.</span></h2>
              <p>
                I worked with the news and advertisement department 
                heads on their requirements and presented a couple of different options on 
                how the site could look and flow. 
              </p>
              <p>
                Once a final decision was made, I provided the design to the designers 
                at Newscycle, working with them to achieve the approved design.
              </p>
            </section>


            <section className={styles.row_full}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                Once the site launched, I maintained and updated the website, 
                creating new features or addressing any issues that arose. 
                The site went on to win 3rd place in SC Associated Press' 
                Overall Website Layout three years in a row.
              </p>
            </section>
            
          </ArticleBody>
        </div>
      </article>

      <OtherProjects current={currentId}/>
    </motion.div>
  )
}

export default ArticlePage;