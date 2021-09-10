import { useMediaQuery } from 'react-responsive';

import Navbar from '../../components/Navbar';
import Leftbar from '../../components/Leftbar';
// import Rightbar from '../../components/Rightbar';

import About from '../About';
import Work from '../Work';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';

import { Container } from './styles';

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <>
      <Navbar />
      { !isMobile && <Leftbar />}
      {/* <Rightbar /> */}
      <Container id="home">
        <div id="box1" />
        <div id="box2" className="text">
          <p className="stroke-invert">Mobile &amp;</p>
          <p className="stroke">Frontend</p>
          <p className="stroke-invert">Developer</p>
        </div>
        <div id="box3" className="text wrapper">
          <div className="static-txt">I like stack </div>
          <ul className="dynamic-txts">
            <li><span>React JS</span></li>
            <li><span>HTML5</span></li>
            <li><span>React Native</span></li>
            <li><span>CSS3 + SASS</span></li>
            <li><span>JavaScript</span></li>
          </ul>
        </div>
      </Container>
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
