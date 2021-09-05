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
import imgWeb from '../../assets/ipad-pro-v.png';

export default function Work() {
  return (
    <Container>
      { dataWork.map((data, { id }) => (
        <section key={id}>
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
                  { data.mobile
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
            { data.mobile
              ? (
                <img src={imgApp} alt="" className="app" />
              )
              : (
                <img src={imgWeb} alt="" className="web" />
              )}
          </div>
        </section>
      ))}
    </Container>
  );
}
