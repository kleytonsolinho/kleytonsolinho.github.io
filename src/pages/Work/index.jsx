import { FaGithub, FaCode, FaYoutube } from 'react-icons/fa';
import { Container, Button } from './styles';

import dataWork from '../../data/DataWork';
import imgApp from '../../assets/iphone-mockup.png';
import imgWeb from '../../assets/mac-mockup.png';

export default function Work() {
  return (
    <Container>
      { dataWork.map((data, { id }) => (
        <section key={id}>
          <div className="container" defaultValue={id}>
            <h3>{data.number}</h3>
            <div className="content">
              <h1>{data.title}</h1>
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
            </div>
            <h4>{data.category}</h4>
          </div>
          <div className="banner">
            { data.mobile
              ? (
                <img src={imgApp} alt="" />
              )
              : (
                <img src={imgWeb} alt="" />
              )}
          </div>
        </section>
      ))}
    </Container>
  );
}
