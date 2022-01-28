import { useEffect } from 'react';
import { AnimatePresence,  } from 'framer-motion';
import * as ga from '../common/lib/ga';

import GlobalLayout from '../common/components/layout/GlobalLayout';
import '../styles/globals.css';






function MyApp({ Component, pageProps, router }) {
  // The handler to smoothly scroll the element into view  
  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      // Get the hash from the url
      const hashId = window.location.hash;

      if (hashId) {
        // Supposed to use the hash to find the first element with that id, but document not loading  
        const element = document.querySelector(hashId);
        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      } else {
        window.scrollTo(0,0);
      }
    }
  };

  //GA tracking
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
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} setHome={boolTest}/>
      </AnimatePresence>
    </GlobalLayout>
  )
}

export default MyApp
