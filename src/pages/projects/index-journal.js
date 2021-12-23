import Image from 'next/image'
import ArticleHeader from "../../common/components/articleHeader/ArticleHeader"
import ArticleBody from '../../common/components/articleBody/ArticleBody'

import styles from '../../styles/ArticlePage.module.css'

import trihex from '/public/assets/trihex.svg'


const position  = ["Lead Designer"]; 
const organization = ["Index-Journal"]; 
const work = ["Web Design"]; 
const stack = ["Photoshop", "Illustrator","Pen & Paper"]; 
const source = null;
const site = {text:"View Archive", link: "https://web.archive.org/web/20141101114409/http://www.indexjournal.com/"}; 

const ArticlePage = () => {
  return(
    <div className={styles.container}> 
      <article>
        <h1 className={styles.title}>Index Journal's Redesign</h1>
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
                When Index-Journal switched content management systems to Newscycle Solutions, 
                we had an opportunity to completely revamp and overhaul the website. I was 
                tasked with researching other popular news sites at the time and then 
                coming up with the overall layout and design for how the new site would be.
              </p>
            </section>

            <div className={styles.row_third}>
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

      <div>
        <h2>Other Projects.</h2>
        <div>
          Project 1
        </div>
        <div>
          Project 2
        </div>
      </div>
    </div>
  )
}

export default ArticlePage;