import {
  FaGithub, FaLinkedinIn, FaInstagram, FaCodepen,
} from 'react-icons/fa';

import { Container, IconList, Icon } from './styles';

export default function Leftbar() {
  return (
    <Container>
      <IconList>
        <Icon>
          <a href="https://www.github.com/kleytonsolinho" target="_blank" rel="noreferrer">
            <FaGithub className="icone" />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="icone" />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.instagram.com/kleytonsolinho" target="_blank" rel="noreferrer">
            <FaInstagram className="icone" />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.codepen.io/" target="_blank" rel="noreferrer">
            <FaCodepen className="icone" />
          </a>
        </Icon>
      </IconList>
    </Container>
  );
}
