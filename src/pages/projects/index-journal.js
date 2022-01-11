import Image from 'next/image'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader.js'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'

import styles from '../../styles/ArticlePage.module.css'

import hero from '/public/assets/project/indexjournal/ijhero.webp'
import trihex from '/public/assets/trihex.svg'


const position  = ["Lead Designer"]; 
const organization = ["Index-Journal"]; 
const work = ["UI / UX", "Web Design"]; 
const stack = ["Photoshop", "Illustrator","Pen & Paper"]; 
const source = null;
const site = {text:"View Archive", link: "https://web.archive.org/web/20141217230315/http://indexjournal.com/"}; 

const ArticlePage = () => {
  return(
    <div className={styles.container}> 
      <article>
        <h1 className={styles.title}>Index-Journal's Website Redesign</h1>
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

      <OtherProjects current="indexjournal"/>
    </div>
  )
}

export default ArticlePage;