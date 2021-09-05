import { FaGithub, FaCode, FaYoutube } from 'react-icons/fa';
import { Container, Button } from './styles';

import dataWork from '../../data/DataWork';
import imgApp from '../../assets/iphone.png';
import imgWeb from '../../assets/ipad-pro.png';

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
                  <FaGithub />
                  <span>React JS</span>
                </div>
                <div>
                  <FaGithub />
                  <span>TypeScript</span>
                </div>
                <div>
                  <FaGithub />
                  <span>Styled Components</span>
                </div>
                <div>
                  <FaGithub />
                  <span>Node JS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            { data.mobile
              ? (
                <div className="app">
                  <img src={imgApp} alt="" className="app" />
                  <img src={imgApp} alt="" className="app" />
                </div>
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
