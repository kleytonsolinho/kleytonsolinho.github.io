import { Container, Content, Title } from './styles';

import imgContact from '../../assets/images/contact-pic.png';

export default function Contact() {
  return (
    <Container id="contact">
      <Content>
        <Title>Need a developer?</Title>
        <a href="mailto:kleytonsolinho@gmail.com">
          <h1 className="stroke">&gt; Let&apos;s work together!</h1>
        </a>
        <img src={imgContact} alt="" />
      </Content>
    </Container>
  );
}
