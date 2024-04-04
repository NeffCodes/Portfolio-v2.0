import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'

import styles from '../../styles/ArticlePage.module.css'

import product from '/public/assets/project/creative/product.png';
import blue from '/public/assets/project/creative/blue.png';
import metrics from '/public/assets/project/creative/metrics.png';


const position  = ["Full-stack Developer"]; 
const organization = ["Creative Mines"]; 
const work = ["Front-end", "Back-end", "UI / UX"]; 
const stack = ["React","TypeScript", "Node.js", "AWS", "Terraform", "Docker"]; 
const source = null;
const site = {text:"Visit Product Page", link: "https://www.runway.works/"}; 
const currentId = 'creative';

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
        <title>JNeff: Runway EDO Platform</title>
      </Head>
      <article>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Runway EDO Platform</h1>
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
            <section className={`${styles.row_third} ${styles.row_left}`}>
              <div className="line" />
              <h2>The <span className='accent'>Introduction.</span></h2>
              <p>
                After joining <a href="https://creativemines.dev/" target='_blank' rel="noreferrer" className={styles.link}>Creative Mines</a>, I became a part of a team of developers tasked with creating a Business Process Management SaaS platform tailored for economic development organizations (EDOs). This product aimed to streamline and automate the operations of such organizations, offering functionalities for tracking, reporting, and fostering relationships.
              </p>
            </section>
            <div className={`${styles.row_twothirds} ${styles.dropshadow}`}>
              <Image 
                src={blue} 
                alt="Runway AI Copilot"
                layout="intrinsic" 
                placeholder="blur"
              />
            </div>  


            <section className={styles.row_full}>
              <div className="line" />
              <h2>The <span className='accent'>Challenges.</span></h2>
              <p>
                Throughout my tenure, I played a pivotal role in enhancing the product by implementing various new features. These included establishing the automated email notification system, designing and constructing endpoints for multiple landing pages, provisioning diverse testing and production environments, drafting comprehensive documentation to facilitate the onboarding process for new developers and clients, and conducting rigorous peer reviews to uphold the highest standards of quality.
              </p>
              <p>
                Additionally, I assumed responsibility for overseeing the front-end of the product. This involved ensuring that production code adhered to compliance standards and followed modern practices, thereby facilitating easier maintenance in the future.
              </p>

              <div className={`${styles.row_full} ${styles.dropshadow}`}>
                <Image 
                  src={product} 
                  alt="Original homepage"
                  layout="responsive" 
                  placeholder="blur"
                />
              </div> 

            </section>

{/* 
            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>Things I <span className='accent'>Learned.</span></h2>
              <p>
                I learned 
              </p>
            </section> */}

          </ArticleBody>
        </div>
      </article>

      <OtherProjects current={currentId}/>
    </motion.div>
  )
}

export default ArticlePage;