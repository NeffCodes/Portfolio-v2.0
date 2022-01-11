import '../styles/globals.css';
import GlobalLayout from '../common/components/layout/GlobalLayout';
import DefaultLayout from '../common/components/layout/DefaultLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

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
