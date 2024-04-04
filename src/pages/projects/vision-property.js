import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'
import { IconContext } from 'react-icons/lib'
import { FiExternalLink } from 'react-icons/fi'

import styles from '../../styles/ArticlePage.module.css'

import hero from '/public/assets/project/vpm/vpmhero.webp'
import trihex from '/public/assets/trihex.svg'


const position  = ["Lead Designer"]; 
const organization = ["Vision Property Management"]; 
const work = ["UI / UX", "Web Design"]; 
const stack = ["Photoshop", "Illustrator","Pen & Paper"]; 
const source = null;
const site = {text:"View Archive", link: "https://web.archive.org/web/20151207061939/http://vpm3.com/"}; 
const currentId = 'vision';

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
        <title>JNeff: VPM Redesign</title>
      </Head>
      <article>
        <a href={site.link} target="_blank" className={styles.title_container}>
          <h1 className={styles.title}>Vision's Website and Portal Redesign</h1>
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
                While as marketing director, my team was tasked with providing 
                a new website design. The new site needed to allow users to filter 
                and search through the database of properties available, assist the 
                users through the stages of leasing a property, and provide a portal 
                for making payments.
              </p>
            </section>

            {/* <div className={`${styles.row_full} ${styles.dropshadow}`}>
              <Image 
                src={hero} 
                alt="Final Approved Design"
                width={2000} 
                height={545} 
                layout="responsive" 
                placeholder="blur"
              />
            </div>    */}

            <section className={styles.row_full}>
              <div className="line" />
              <h2>My <span className='accent'>Approach.</span></h2>
              <p>
                For the first stage of the design process, my team and I sat with a couple of the 
                sales teams to get a feel for what they would like and needed from the 
                site. Once we got that data, we worked on laying out the content and general 
                flow for the site.
              </p>
              <p>
                This included creating some media content to be included in the 
                site. Throughout the process, we gave presentations to the owners 
                and department heads, and also conferred with members from the development 
                team to make sure we stayed within their scope.
              </p>
            </section>

            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                Once the design was finalized, we provided the design 
                specs to the IT department who handled the task of developing 
                and maintaining the site.
              </p>
            </section>
            <div className={`${styles.row_third} ${styles.align_center}`}>
              <Image src={trihex} layout="intrinsic" />
            </div>
            
          </ArticleBody>
        </div>
      </article>

      <OtherProjects current={currentId}/>
    </motion.div>
  )
}

export default ArticlePage;