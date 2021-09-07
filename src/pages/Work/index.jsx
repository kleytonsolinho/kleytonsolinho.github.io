import {
  FaGithub,
  FaCode,
  FaYoutube,
} from 'react-icons/fa';

import {
  SiReact,
  SiTypescript,
  SiStyledComponents,
  SiNodeDotJs,
} from 'react-icons/si';

import { Container, Button } from './styles';

import dataWork from '../../data/DataWork';
import imgApp from '../../assets/iphone.png';
import imgWeb from '../../assets/ipad-pro-h.png';
import imgFull from '../../assets/ipad-pro-iphone.png';

export default function Work() {
  return (
    <Container>
      { dataWork.map((data, { id }) => (
        <section key={id} className={data.number % 2 === 0 ? 'right' : 'left'}>
          <div className="container" defaultValue={id}>
            <h3>{data.number}</h3>
            <div className="content">
              <h1 className="stroke-invert">{data.title}</h1>
              <h2>{data.tecnology}</h2>
              <p>{data.description}</p>
              <div>
                <a href={data.github} target="_blank" rel="noreferrer">
                  <Button>
                    <FaGithub className="icon" />
                    Github Coding
                  </Button>
                </a>
                <a href={data.demo} target="_blank" rel="noreferrer">
                  { data.model === 1
                    ? (
                      <Button>
                        <FaYoutube className="icon" />
                        Video App
                      </Button>
                    )
                    : (
                      <Button>
                        <FaCode className="icon" />
                        Live Demo
                      </Button>
                    )}
                </a>
              </div>
              <h2>Tecnologias:</h2>
              <div className="tecnology">
                <div>
                  <SiReact className="tec-icon" />
                  <span>React JS</span>
                </div>
                <div>
                  <SiTypescript className="tec-icon" />
                  <span>TypeScript</span>
                </div>
                <div>
                  <SiStyledComponents className="tec-icon" />
                  <span>Styled Components</span>
                </div>
                <div>
                  <SiNodeDotJs className="tec-icon" />
                  <span>Node JS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            { data.model === 1 && (
              <img src={imgApp} alt="" className="img-h" />
            )}
            { data.model === 2 && (
              <img src={imgWeb} alt="" className="img-w" />
            )}
            { data.model === 3 && (
              <img src={imgFull} alt="" className="img-w" />
            )}
          </div>
        </section>
      ))}
    </Container>
  );
}
