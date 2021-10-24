import { FaRegFolderOpen, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import {
  Container,
  Top,
  Bottom,
  Content,
  Header,
  Title,
  HeaderLinks,
  CardContainer,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  ListTecnologys,
} from './styles';

import dataExperience from '../../data/DataExperience';

export default function Experience() {
  return (
    <Container id="experience">
      <Top />
      <Content>
        <Header>
          <Title>Experience &amp; Case Study</Title>
        </Header>
        <CardContainer>
          { dataExperience.map((data) => (
            <CardContent key={data.id}>
              <CardHeader>
                <FaRegFolderOpen />
                <HeaderLinks>
                  <a href={data.repository}>
                    <FaGithub />
                  </a>
                  <a href={data.demo}>
                    <FaExternalLinkAlt />
                  </a>
                </HeaderLinks>
              </CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
              <CardFooter>
                <ListTecnologys>
                  {data.tecnologys.map((tecnology) => (
                    <li>{tecnology}</li>
                  ))}
                </ListTecnologys>
              </CardFooter>
            </CardContent>
          ))}
        </CardContainer>
      </Content>
      <Bottom />
    </Container>
  );
}
