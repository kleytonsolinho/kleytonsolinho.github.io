import { FaRegFolderOpen, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import {
  Container, Top, Bottom, Content,
} from './styles';

import dataExperience from '../../data/DataExperience';

export default function Experience() {
  return (
    <Container>
      <Top />
      <Content>
        <div className="header">
          <h3>Experience &amp; Case Study</h3>
        </div>
        <div className="container">
          { dataExperience.map((data, { id }) => (
            <div key={id}>
              <header>
                <FaRegFolderOpen />
                <section>
                  <a href="/">
                    <FaGithub />
                  </a>
                  <a href="/">
                    <FaExternalLinkAlt />
                  </a>
                </section>
              </header>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
              <footer>
                <ul>
                  {data.tecnology.map((tecs) => (
                    <li>{tecs}</li>
                  ))}
                </ul>
              </footer>
            </div>
          ))}
        </div>
      </Content>
      <Bottom />
    </Container>
  );
}
