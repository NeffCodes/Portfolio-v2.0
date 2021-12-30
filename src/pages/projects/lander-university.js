import Image from 'next/image'
import ArticleHeader from "../../common/components/articleHeader/ArticleHeader"
import ArticleBody from '../../common/components/articleBody/ArticleBody'

import styles from '../../styles/ArticlePage.module.css'

import trihex from '/public/assets/trihex.svg'


const position  = ["Co-Designer"]; 
const organization = ["ILander University"]; 
const work = ["Environmental Design"]; 
const stack = ["Illustrator","Vinyl"]; 
const source = null;
const site = null; 

const ArticlePage = () => {
  return(
    <div className={styles.container}> 
      <article>
        <h1 className={styles.title}>Computer Commons Vinyl Design</h1>
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
                Lander University wanted an environmental design installation in 
                their new computer commons. A fellow designer and I met with the heads 
                of the IT department, discussed their expectations for the installation, and 
                measured the space where they wanted it installed. 
              </p>
            </section>

            <div className={styles.row_full}>
              <Image src={trihex}  layout="responsive" />
            </div>   

            <section className={styles.row_full}>
              <div className="line" />
              <h2>Our <span className='accent'>Process.</span></h2>
              <p>
                We each came up with a couple of designs, taking inspiration from the 
                various components in the commons area, and presented them to the heads for 
                input and approval. The heads decided to use one of my proposed designs. Once 
                we had the approval, we prepped the installation site, cut, peeled and 
                installed the design in vinyl.
              </p>
            </section>


            <section className={styles.row_full}>
              <div className="line" />
              <h2>After <span className='accent'>Shots.</span></h2>
              <div class={styles.gallery_container}>
                <div>
                  <Image src={trihex} layout="responsive" />
                </div>
                                     
                <div>
                  <Image src={trihex} layout="responsive" />
                </div>          

                <div>
                  <Image src={trihex}  layout="responsive" />
                </div>     
              </div>

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