import {
  Container, Content, TerminalHeader, TerminalContainer,
} from './styles';

export default function Animation() {
  return (
    <Container>
      <Content>
        <TerminalHeader>
          <span className="icon" />
          <span className="icon" />
          <span className="icon" />
        </TerminalHeader>
        <TerminalContainer />
      </Content>
      <h1>
        <span className="yarn">yarn </span>
        <span className="create">create </span>
        react-app kleytonsolinho
      </h1>
    </Container>
  );
}
