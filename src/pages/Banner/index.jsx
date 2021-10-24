import React from 'react';

import { Container } from './styles';

export default function Banner() {
  return (
    <Container id="banner">
      <div id="box1" />
      <div id="box2" className="text">
        <p className="stroke-invert">Mobile &amp;</p>
        <p className="stroke">Frontend</p>
        <p className="stroke-invert">Developer</p>
      </div>
      <div id="box3" className="text wrapper">
        <div>
          <p>React JS, React Native</p>
          <p>TypeScript &amp; Redux</p>
        </div>
      </div>
    </Container>
  );
}
