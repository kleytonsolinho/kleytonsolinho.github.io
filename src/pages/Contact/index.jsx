import { Container } from './styles';

import imgContact from '../../assets/contact-pic.png';

export default function Contact() {
  return (
    <Container id="contact">
      <div className="content">
        <h3>Need a developer?</h3>
        <a href="mailto:kleytonsolinho@gmail.com">
          <h1 className="stroke">&gt; Let&apos;s work together!</h1>
        </a>
        <img src={imgContact} alt="" />
      </div>
    </Container>
  );
}
