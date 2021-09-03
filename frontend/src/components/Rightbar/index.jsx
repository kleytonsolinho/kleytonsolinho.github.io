import { FaRegEnvelope } from 'react-icons/fa';

import { Container } from './styles';

export default function Rightbar() {
  return (
    <Container>
      <div className="icon">
        <FaRegEnvelope />
      </div>
      <a href="mailto:kleytonsolinho@gmail.com">
        kleytonsolinho@gmail.com
      </a>
    </Container>
  );
}
