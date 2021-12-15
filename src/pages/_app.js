import '../styles/globals.css';
import GlobalLayout from '../common/components/layout/GlobalLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter >
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </AnimatePresence>)
}

export default MyApp
