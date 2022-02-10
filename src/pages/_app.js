import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import googleAnalytics from '../common/hooks/googleAnalytics';

import GlobalLayout from '../common/components/layout/GlobalLayout';
import '../styles/globals.css';

const handleExitComplete = () => {
  if(typeof window !== 'undefined'){
    let hashID = window.location.hash
    if(hashID) {
      let element = document.querySelector(hashID);
      if(element) { 
        setTimeout( ()=> {
          element.scrollIntoView({
            behavior: 'smooth',
            block:'start',
            inline:'start',
          })
        }, 400)
      } else {
        window.scrollTo(0,0);
        console.log('top')
      }
    }
  }
}

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  googleAnalytics();

  return (
    <GlobalLayout>
      <AnimatePresence 
        onExitComplete={handleExitComplete}
      >
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </GlobalLayout>
  )
}

export default MyApp
