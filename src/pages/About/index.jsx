import { Container } from './styles';

import imgPerfil from '../../assets/profile-pic.png';

export default function About() {
  return (
    <Container id="about">
      <div className="perfil">
        <h2 className="stroke">startup</h2>
        <img src={imgPerfil} alt="" />
        <h3 className="stroke">[...fintech, growth]</h3>
      </div>
      <div className="content">
        <article>
          <h1 className="stroke-invert">Hi, I&apos;m Kleyton!</h1>
          <p>
            Comecei a programar em 2008 com Visual Basic na época desenvolvendo
            softwares de Gestão Empresarial e NFe 2.0, ao longo do tempo fui
            migrando para Tecnologias Web.
          </p>
          <p>
            Me formando bacharel em Sistemas de Informação em 2022, também
            sou apaixonado por Economia, paixão essa que me fez fazer bacharel
            em Ciências Economicas, o que me fez entender alguns conceitos
            movimentos da nova economia, como escala, CAC/LTV, Stock Options e
            Equity!
          </p>
          <p>
            Eu não sou só um desenvolvedor, tenho cabeça de empreendedor,
            gosto de projetos que vão gerar valor para sociedade e me ajudar a
            atingir o próximo nível!
          </p>
          <p>Abaixo um pouco das tecnologias que venho trabalhando:</p>
          <section>
            <ul>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>NEXT JS</li>
            </ul>
            <ul>
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </ul>
          </section>
        </article>
      </div>
    </Container>
  );
}
