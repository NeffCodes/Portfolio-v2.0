import Head from 'next/head'
import Image from 'next/image'
import ArticleHeader from '../../common/components/articleHeader/ArticleHeader'
import ArticleBody from '../../common/components/articleBody/ArticleBody'
import OtherProjects from '../../common/components/otherProjects/OtherProjects'

import styles from '../../styles/ArticlePage.module.css'

import photofinal from '/public/assets/project/skyline/final-min.png';
import photo1 from '/public/assets/project/skyline/v1-min.png';
import photo2 from '/public/assets/project/skyline/v2-min.png';
import photo3 from '/public/assets/project/skyline/v3-min.png';


const position  = ["Designer"]; 
const organization = ["Skylines Exhibits & Design"]; 
const work = ["Environmental", "Graphic Design"]; 
const stack = ["Illustrator","Photoshop","CAD"]; 
const source = null;
const site = null; 

const ArticlePage = () => {
  return(
    <div className={styles.container}> 
      <Head>
        <title>JNeff: Duke Energy Bannerstand</title>
      </Head>
      <article>
        <h1 className={styles.title}>Duke Energy Bannerstand</h1>
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
                While at Skylines Exhibits &#38; Designs, Duke Energy 
                wanted new display pieces for one of their upcoming expos. 
                I was given the opportunity by the Skyline's lead designer to 
                come up with the design for a bannerstand to be presented to the client. 
              </p>
              <p>
                The client provided a photo gallery to select images from and a 
                branding guideline for me to follow. They specified a particular 
                image and tagline to be included in the design. 
              </p>
            </section>

 

            <section className={styles.row_full}>
              <div className="line" />
              <h2>My <span className='accent'>Process.</span></h2>
              <p>
                Making sure I followed their branding, I sketched out a couple of 
                ideas for the layout and worked with the lead designer to narrow them 
                down to 3 different options. I created mock-ups for the options, using the 
                provided photos, to get a better feel for each layout.
              </p>

              <div className={styles.gallery_container}>
                <div className={styles.gallery_item_center}>
                  <h3>Option A</h3>
                  <div className={styles.dropshadow}>
                    <Image 
                      src={photo1}
                      alt="Option A: blue symmetrical design"
                      width={216} 
                      height={545} 
                      placeholder="blur"
                    />  
                  </div>

                </div>
                                     
                <div className={styles.gallery_item_center}>
                  <h3>Option B</h3>
                  <div className={styles.dropshadow}>
                    <Image 
                      src={photo2}
                      alt="Option B: purple asymmetrical design"
                      width={216} 
                      height={545} 
                      placeholder="blur"
                    />
                  </div>

                </div>          

                <div className={styles.gallery_item_center}>
                  <h3>Option C</h3>
                  <div className={styles.dropshadow}>
                    <Image 
                      src={photo3}
                      alt="Option C: green symmetrical full length"
                      width={216} 
                      height={545} 
                      placeholder="blur"
                    />
                  </div>

                </div>     
              </div>
            </section>


            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                Once I had the mock-ups finalized, I gave them to the lead 
                designer for his approval, who then included them with the 
                presentation with the rest of the expo pieces. The client decided 
                which of the options they liked and once they gave their final approval, 
                I optimized the artwork to be sent to Skyline's corporate office to be 
                printed and produced.
              </p>
            </section>
        
            <div className={`${styles.row_third} ${styles.align_center} ${styles.dropshadow}`}>
              <Image 
                src={photofinal} 
                alt="Final approved design as a bannerstand,"
                width={190} 
                height={480} 
                placeholder="blur"
              />
            </div>

          </ArticleBody>
        </div>
      </article>

      <OtherProjects current="skyline"/>
    </div>
  )
}

export default ArticlePage;