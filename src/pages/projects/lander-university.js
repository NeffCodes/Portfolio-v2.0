import Image from 'next/image'
import ArticleHeader from "../../common/components/articleHeader/ArticleHeader"
import ArticleBody from '../../common/components/articleBody/ArticleBody'

import styles from '../../styles/ArticlePage.module.css'

import photofinal from '/public/assets/project/lander/approved-design.png';
import photo1 from '/public/assets/project/lander/cc-01.jpg';
import photo2 from '/public/assets/project/lander/cc-02.jpg';
import photo3 from '/public/assets/project/lander/cc-03.jpg';


const position  = ["Co-Designer"]; 
const organization = ["Lander University"]; 
const work = ["Environmental", "Graphic Design"]; 
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

            <div className={`${styles.row_full} ${styles.dropshadow}`}>
              <Image 
                src={photofinal} 
                alt="Final Approved Design"
                width={2000} 
                height={545} 
                layout="responsive" 
                placeholder="blur"
              />
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
              <div className={styles.gallery_container}>
                <div className={`${styles.gallery_item_large} ${styles.dropshadow}`}>
                  <Image 
                    src={photo1}
                    alt="Installed Vinyl from angled position"
                    width={1024} 
                    height={768} 
                    layout="responsive" 
                    placeholder="blur"
                  />
                </div>
                                     
                <div className={`${styles.gallery_item} ${styles.dropshadow}`}>
                  <Image 
                    src={photo2}
                    alt="Installed Vinyl from the front"
                    width={1024} 
                    height={768} 
                    layout="responsive" 
                    placeholder="blur"
                  />
                </div>          

                <div className={`${styles.gallery_item} ${styles.dropshadow}`}>
                  <Image 
                    src={photo3}
                    alt="Installed Vinyl from the back of the commons area"
                    width={1024} 
                    height={768} 
                    layout="responsive" 
                    placeholder="blur"
                  />
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