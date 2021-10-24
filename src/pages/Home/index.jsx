import { useMediaQuery } from 'react-responsive';

import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';

import Banner from '../Banner';
import About from '../About';
import Work from '../Work';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';

import { Main } from './styles';

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <>
      <Navbar />
      { !isMobile && <Rightbar />}
      <Main>
        <Banner />
        <About />
        <Work />
        <Experience />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}
