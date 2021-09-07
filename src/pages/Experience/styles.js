import styled from 'styled-components';

import imgBg from '../../assets/global-digital.jpg';

export const Container = styled.section`
  width: 100%;
  max-width: 1268px;
  height: 100vh;
  max-height: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;

  img {
    height: 100%;
  }
`;
