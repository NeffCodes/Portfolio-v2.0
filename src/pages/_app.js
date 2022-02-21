import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import googleAnalytics from '../common/hooks/googleAnalytics';

import GlobalLayout from '../common/components/layout/GlobalLayout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  googleAnalytics();

  return (
    <GlobalLayout>
      <AnimatePresence 
        exitBeforeEnter 
      >
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </GlobalLayout>
  )
}

export default MyApp
