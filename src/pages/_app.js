import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import * as ga from '../common/lib/ga';

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

  //GA tracking on route change
  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)
    
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
