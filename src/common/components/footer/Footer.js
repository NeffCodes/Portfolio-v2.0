import { motion } from 'framer-motion'

import { externalPaths } from '../../context/external-path-list'
import Socials from '../socials/Socials'
import Copyright from '../copyright/Copyright'
import styles from './Footer.module.css'

//motion variants
let easing = [0.175, 0.85, 0.42, 0.96];

const container = {
  initial: { 
    x: -50, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      ease: easing 
    } 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      delay: 0.1, 
      duration: 0.5, 
      ease: easing, 
      delayChildren: .8,
      staggerChildren: 0.2 
    }
  },
};

export default function Footer(){
  return (
    <footer>
      <div className={styles.container}>
        <motion.div 
          initial="initial"
          whileInView="visible"
          exit="initial"
          variants={container}
          className={styles.contact}
        >
          <div id="contact" className={styles.text}>
            <Socials/>
            <h2> Say <span className='accent'>hello.</span></h2>
            <p>Looking for a developer or designer to join your team? </p>
            <p>Feel free to email me: <a href={`mailto:${externalPaths.email}`} className={styles.email}>{externalPaths.email}</a></p>
            <p>Or send me a quick message here:</p>
            
            {/* <!-- A little help for the Netlify bots if you're not using a SSG --> */}
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>


            <form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>Your Name: <input type="text" name="name"/></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email"/></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>

          </div>
          <div className={styles.image}></div>
        </motion.div>
          
      </div>
      <Copyright />
    </footer>
  )
}