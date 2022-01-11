import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../common/lib/ga';

import '../styles/globals.css';
import GlobalLayout from '../common/components/layout/GlobalLayout';
import DefaultLayout from '../common/components/layout/DefaultLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  const router = useRouter();

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
    <AnimatePresence exitBeforeEnter >
      <GlobalLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalLayout>
    </AnimatePresence>)
}

export default MyApp
