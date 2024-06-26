import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { IconContext } from 'react-icons/lib';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { sortedData } from '../common/context/project-list'
import { findFeaturedData } from '../common/utils/tile-data-functions'
import Socials from '../common/components/socials/Socials'
import Button from '../common/components/button/Button'

import useScrollIntoView from '../common/hooks/useScrollIntoView';
import styles from '../styles/Home.module.css';


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
  const featured = findFeaturedData(sortedData);

  useScrollIntoView();

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
                a software engineer 
                <br/> &#38; graphic designer
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
            viewport={{ once: true, amount: 0.1 }}
            variants={fromRight}
          >
            <div className='line' /> 
            <h2> Some of my <span className='accent'>work.</span></h2>
            <p>
              I like to stay busy, and you will regularly find me working on a new feature or experience. 
              If you want to see an example of my work, you are looking at it! Here are a few additional projects I have worked on. 
            </p>
            
            <ul className={styles.project_list}>
              {featured.map( tile => {
                return(
                  <motion.li 
                    className={styles.project_card} 
                    variants={item}
                    tabIndex="0" 
                    key={tile.slug}>

                      <article className={styles.project_article}>
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

                          {/* if external link, go to external */}
                          {tile.external && (
                            <a href={tile.external} target="_blank" className={styles.project_image_link}>
                              <div className={styles.project_image}>
                                <Image
                                  src={`/assets/project/${tile.featuredImage}`} 
                                  alt={tile.imgAlt} 
                                  width={768} 
                                  height={512} 
                                />
                              </div>
                              <div className={styles.project_title_container}>
                                <h1 className={styles.project_title}>
                                  {tile.title} 
                                </h1>                               
                                <IconContext.Provider value={{size: "2em"}}>
                                  <FiExternalLink/>
                                </IconContext.Provider>
                              </div>
                              
                            </a>
                          )}

                          {/* if no external link, go to case study */}
                          {!tile.external && (
                            <Link href={{pathname: `/projects/${tile.slug}`}}>
                              <a className={styles.project_image_link}>
                                <div className={styles.project_image}>
                                  <Image
                                    src={`/assets/project/${tile.featuredImage}`} 
                                    alt={tile.imgAlt} 
                                    width={768} 
                                    height={512} 
                                  />
                                </div>
                                
                                <h1 className={styles.project_title}>{tile.title}</h1>
                              </a>
                              
                            </Link>
                          )}
                        </header>
                        
                        <p>{tile.description}</p>
                    
                        <footer className={styles.project_link_container}>
                          {tile.slug && (
                            <Link href={{pathname: `/projects/${tile.slug}`}}>
                              <a className={styles.project_link}>View {tile.customCTA || "Details"} &rarr;</a>
                            </Link>
                          )}
                          {!tile.slug && (
                            <a href={tile.external} className={styles.project_link} target="_blank">View {tile.customCTA || "Details"} &rarr;</a>
                          )}

                          {tile.source && (
                            <IconContext.Provider value={{size: "1.5em"}}>
                              <a href={tile.source} className={styles.project_source} target="_blank">
                                <FaGithub/>
                              </a>
                            </IconContext.Provider>
                          )}

                        </footer>
                      </article>
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
                    <h4 className={styles.head_A}>Some technologies I know:</h4>
                    <ul className={styles.list_A}>
                      <li>HTML / CSS</li>
                      <li>JavaScript / TypeScript</li>
                      <li>React / Redux</li>
                      <li>Amazon Web Services (AWS)</li>
                      <li>Git</li>
                      <li>Docker</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                    </ul>
                    <h4 className={styles.head_B}>Tools I use:</h4>
                    <ul className={styles.list_B}>
                      <li>GitHub</li>
                      <li>Postman</li>
                      <li>Codepen</li>
                      <li>VS Code</li>
                      <li>WordPress</li>
                      <li>Bootstrap</li>
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
