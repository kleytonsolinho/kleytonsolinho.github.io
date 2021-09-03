import { Container, Content } from './styles';

export default function Animation() {
  return (
    <Container>
      <Content>
        <div className="termHeader">
          <span className="icon" />
          <span className="icon" />
          <span className="icon" />
        </div>
        <div className="termBody" />
      </Content>
      <h1>
        <span className="yarn">yarn</span>
        {' '}
        <span className="create">create</span>
        {' '}
        react-app kleytonsolinho
      </h1>
    </Container>
  );
}
