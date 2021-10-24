import {
  Container, PerfilImage, PerfilContent, ListContainer, ListTecnology,
} from './styles';

import imgPerfil from '../../assets/images/profile-pic.png';

export default function About() {
  return (
    <Container id="about">
      <PerfilImage>
        <h2 className="stroke">startup</h2>
        <img src={imgPerfil} alt="" />
        <h3 className="stroke">[...fintech, growth]</h3>
      </PerfilImage>
      <PerfilContent>
        <h1 className="stroke-invert">Hi, I&apos;m Kleyton!</h1>
        <p>
          Comecei a programar em 2008 com Visual Basic na época desenvolvendo
          softwares de Gestão Empresarial e NFe 2.0, ao longo do tempo fui
          migrando para Tecnologias Web.
        </p>
        <p>
          Me formando bacharel em Sistemas de Informação em 2022, também
          sou apaixonado por Economia, paixão essa que me fez fazer bacharel
          em Ciências Economicas, o que me fez entender alguns conceitos e
          movimentos da nova economia, como escala, CAC/LTV, Stock Options e
          Equity!
        </p>
        <p>
          Eu não sou só um desenvolvedor, tenho cabeça de empreendedor,
          gosto de projetos que vão gerar valor para sociedade e me ajudar a
          atingir o próximo nível!
        </p>
        <p>Abaixo um pouco das tecnologias que venho trabalhando:</p>
        <ListContainer>
          <ListTecnology>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React JS</li>
          </ListTecnology>
          <ListTecnology>
            <li>React Native</li>
            <li>Next JS</li>
            <li>Redux</li>
          </ListTecnology>
          <ListTecnology>
            <li>Styled Components</li>
            <li>Chakra UI / Material UI</li>
            <li>Tailwind</li>
          </ListTecnology>
        </ListContainer>
      </PerfilContent>
    </Container>
  );
}
