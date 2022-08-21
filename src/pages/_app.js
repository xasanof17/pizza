import "../assets/scss/globals.scss";
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="app">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
