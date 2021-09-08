import {
  Container, Top, Bottom, Content,
} from './styles';

export default function Experience() {
  return (
    <Container>
      <Top />
      <Content>
        <div className="header">
          <h3>Experience &amp; Case Study</h3>
        </div>
        <div className="container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Content>
      <Bottom />
    </Container>
  );
}
