import { Container } from './styles';

import imgPerfil from '../../assets/profile-pic.png';

export default function About() {
  return (
    <Container>
      <div className="perfil">
        <h2 className="stroke">startup</h2>
        <img src={imgPerfil} alt="" />
        <h3 className="stroke">[...fintech, next]</h3>
      </div>
      <div className="content">
        <h1 className="stroke-invert">Hi, I am Kleyton!</h1>
        <p>
          Comecei a programar em 2008 com Visual Basic na época desenvolvendo
          softwares de Gestão Empresarial e NFe 2.0, ao longo do tempo fui
          migrando para Tecnologias da Web como HTML5, CSS3, JavaScript e PHP
          com o crescente número de SaaS.
        </p>
        <p>
          Hoje estudo e me especializo nas Tecnologias de Frontend como React JS/NEXT JS,
          React Native e Node JS (Backend), pois no futuro pretendo me
          tornar um desenvolvedor fullstack.
        </p>
        <p>
          Me formando bacharel em Sistemas de Informação em 2022, também
          sou apaixonado por Economia, paixão essa que me fez fazer bacharel
          em Ciências Economicas, o que me fez entender alguns conceitos
          movimentos da nova economia, como escala, CAC/LTV + Stock Options/IPO
          e Equity! ;D
        </p>
        <p>
          Como você pode ver eu não sou só um desenvolvedor, tenho cabeça de
          empreendedor, busco projetos que vão gerar valor para sociedade e me
          ajudar a atingir o próximo nível!
        </p>
      </div>
    </Container>
  );
}
