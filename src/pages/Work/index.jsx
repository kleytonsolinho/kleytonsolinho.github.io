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

import {
  Container,
  Developer,
  DevContainer,
  DevContent,
  DevTitle,
  DevSubTitle,
  DevDescription,
  DevButtonContainer,
  Button,
  DevTecnologyContainer,
  DevBanner,
} from './styles';

import dataWork from '../../data/DataWork';

import imgApp from '../../assets/images/iphone-2.png';
import imgWeb from '../../assets/images/ipad-pro-h.png';
import imgFull from '../../assets/images/ipad-pro-iphone.png';

export default function Work() {
  const switchImg = [
    <img src={imgApp} alt="" />,
    <img src={imgWeb} alt="" />,
    <img src={imgFull} alt="" />,
  ];

  return (
    <Container id="work">
      { dataWork.map((data) => (
        <Developer key={data.id} side={data.number}>
          <DevContainer defaultValue={data.id}>
            <h3>{data.number}</h3>
            <DevContent>
              <DevTitle className="stroke-invert">{data.title}</DevTitle>
              <DevSubTitle>{data.tecnology}</DevSubTitle>
              <DevDescription>{data.description}</DevDescription>
              <DevButtonContainer>
                <a href={data.github} target="_blank" rel="noreferrer">
                  <Button>
                    <FaGithub className="icon" />
                    Github Coding
                  </Button>
                </a>
                <a href={data.demo} target="_blank" rel="noreferrer">
                  { data.model === 0
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
              </DevButtonContainer>
              <DevSubTitle>Tecnologias</DevSubTitle>
              <DevTecnologyContainer>
                <div>
                  <SiReact className="tecIcon" />
                  <span>React JS</span>
                </div>
                <div>
                  <SiTypescript className="tecIcon" />
                  <span>TypeScript</span>
                </div>
                <div>
                  <SiStyledComponents className="tecIcon" />
                  <span>Styled Components</span>
                </div>
                <div>
                  <SiNodeDotJs className="tecIcon" />
                  <span>Node JS</span>
                </div>
              </DevTecnologyContainer>
            </DevContent>
          </DevContainer>
          <DevBanner>
            {switchImg[data.model]}
          </DevBanner>
        </Developer>
      ))}
    </Container>
  );
}
