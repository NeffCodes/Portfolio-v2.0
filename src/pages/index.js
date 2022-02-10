import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { projectTileData } from '../common/context/project-list'
import { findFeaturedData } from '../common/utils/tile-data-functions'
import Socials from '../common/components/socials/Socials'
import Button from '../common/components/button/Button'

import styles from '../styles/Home.module.css'

//motion variants
const ease = [0.48, 0.15, 0.25, 0.96];

const container = {
  visible: {
    transition: {
     staggerChildren: .2,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  },
}

const fromTop = {
  initial: { 
    x: 0,
    y: -30,
    opacity: 0,
    transition: { 
      duration: 0.5, 
      ease: ease, 
    } 
  },
  visible: {
    x: 0,
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: ease, 
    } 
  },
  exit: {
    x: 0,
    y: -100, 
    transition: { 
      duration: 0.4, 
      ease: ease, 
    } 
  },
}

const fromRight = {
  initial: { 
    x: 20, 
    y: 0,
    opacity: 0
  },
  visible: { 
    x: 0,
    y: 0, 
    opacity: 1, 
    transition: { 
      when: 'beforeChildren',
      duration: 0.4, 
      ease: ease, 
      delayChildren: 0.2,
      staggerChildren: 0.1,
    } 
  },
  exit: {
    x:0,
    y: -100, 
    transition: { 
      duration: 0.4, 
      ease: ease, 
    } 
  },
}

const fromLeft = {
  initial: { 
    x: -20, 
    y: 0,
    opacity: 0
  },
  visible: { 
    x: 0,
    y: 0,
    opacity: 1, 
    transition: { 
      duration: 0.4, 
      ease: ease, 
    } 
  },
  exit: { 
    x: 0,
    y: -100, 
    transition: { 
      duration: 0.4, 
      ease: ease, 
    } 
  },
};

const item = {
  initial: {opacity: 0, y:30},
  visible: {opacity: 1, y:0, transition: { duration: 0.4 }},
}

export default function Home() {
  const featured = findFeaturedData(projectTileData);

  return (
    <>
      <Head>
        <title>JNeff: Home</title>
      </Head>

      <motion.main
        initial="initial"
        exit="exit"
        variants={container}
      >
        <section 
          id='hero' 
          className={styles.hero_container}
        >
          <motion.div 
            className={`${styles.hero} site_width_container`}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromTop}
          >
            <div className={styles.hero_text_container}>
              <Socials />
              <h1 className={styles.hero_title}>
                Hello! I'm <span className='accent'>James,</span>
                <br/>
                a graphic designer 
                <br/> &#38; front-end developer
              </h1>
              <p className={styles.hero_description}> 
                I  create and build engaging digital experiences through interactive and clean design
              </p>
              <Button destination='/#work'>See my work &rarr;</Button>
            </div>
            <div className={styles.hero_photo}>
              <Image 
                alt=""
                src="/assets/heroPhone.svg"
                layout="fill"
                objectFit='contain'
                objectPosition="bottom"
                quality={100}
              />
            </div>
          </motion.div>
        </section>

        <section 
          id='work' 
          className={styles.work_container}

        >
          <motion.div 
            className='site_width_container'
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fromRight}
          >
            <div className='line' /> 
            <h2> Some of my <span className='accent'>work.</span></h2>
            <p>
              I like to stay busy, and you will regularly find me working on a new feature or experience. 
              Here are a few projects I have worked on. 
            </p>
            
            <ul className={styles.project_list}>
              {featured.map( tile => {
                return(
                  <motion.li 
                    className={styles.project_card} 
                    variants={item}
                    tabIndex="0" 
                    key={tile.slug}>
                    <Link href={{pathname:`/projects/${tile.slug}`}}>
                      <article>
                        <header>
                          {tile.tags && 
                          (<ul className={styles.project_tags}>
                            {tile.tags.map( tag=> {
                              return (
                                <li 
                                  className={styles.project_tag} 
                                  key={`${tile.title}-${tag}`}
                                >
                                  {tag}
                                </li>
                              )
                            })}
                          </ul>)}

                          <div className={styles.project_image}>
                            <Image
                              src={`/assets/project/${tile.featuredImage}`} 
                              alt={tile.imgAlt} 
                              width={768} 
                              height={512} 
                            />
                          </div>

                          <h1 className={styles.project_title}>{tile.title}</h1>
                        </header>
                        
                        <p>{tile.description}</p>
                    
                        <footer>
                          <a className={styles.project_link}>View {tile.customCTA || "Project"} &rarr;</a>
                        </footer>
                      </article>
                    </Link>
                  </motion.li>
                )
              })}
              <li>
                <div className={styles.work_photo}>
                  <Image 
                    alt=""
                    src="/assets/hiveGraphic.svg"
                    layout="fill"
                    objectFit='contain'
                    objectPosition="left"
                    quality={100}
                    className={styles.test}
                  />
                </div>
              </li>
            </ul>
          </motion.div>  
        </section>
        
        <motion.section 
          id='about'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fromLeft}
        >
          <div className={` ${styles.about} site_width_container`}>
            <div className={styles.line} />
            <h2> More about <span className='accent'>me.</span></h2>
            <p className={styles.about_me}>
                I have spent the last 10 years working across different areas of print and digital design, 
                contributing to multiple development projects. I love blending the art of design with the skill 
                of programming in order to deliver immersive and captivating user experiences.  
            </p>

            <div className={styles.about_skills_container}>
              <div className={styles.about_skill}>
                <div className={styles.about_subtitle_container}>
                  <h3 className={styles.about_subtitle}>The Designer</h3>
                  <div className='line' />
                </div>
                <p>
                  I enjoy developing visual solutions through unique branding and effective layouts in 
                  order to create thoughtful interactions.
                </p>
                <div className={styles.about_list_container}>
                  <h4 className={styles.head_A}>What I enjoy designing:</h4>
                  <ul className={styles.list_A}>
                    <li>UI/UX</li>
                    <li>Web</li>
                    <li>Mobile</li>
                    <li>Print</li>
                  </ul>
                    
                  <h4 className={styles.head_B}>Tools I use:</h4>
                  <ul className={styles.list_B}>
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Pen &#38; Paper</li>
                  </ul>
                </div>  
              </div>
              
              <div className={styles.about_skill}>
                <div className={styles.about_subtitle_container}>
                  <h3 className={styles.about_subtitle}>The Developer</h3>
                  <div className='line' />
                </div>
                <p>
                  Front-end development is always improving, and so am I. As a natural problem-solver, 
                  I enjoy learning new ways to bring ideas to life, while maintaining accessible and clean code.              
                </p>
                <div className={styles.about_list_container}>
                    <h4 className={styles.head_A}>Languages I know:</h4>
                    <ul className={styles.list_A}>
                      <li>HTML</li>
                      <li>CSS/SCSS</li>
                      <li>JavaScript ES6</li>
                      <li>React/Redux</li>
                      <li>Git</li>
                    </ul>
                    <h4 className={styles.head_B}>Tools I use:</h4>
                    <ul className={styles.list_B}>
                      <li>GitHub</li>
                      <li>Bootstrap</li>
                      <li>Codepen</li>
                      <li>VS Code</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </>
  )
}
