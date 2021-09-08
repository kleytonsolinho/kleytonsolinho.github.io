import styled from 'styled-components';

import imgBg from '../../assets/global-digital.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    height: 100%;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 50px;
  display: absolute;
  top: 0;
  left: 0;
  background: rgba(10, 25, 47);
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 20px 5px #0B1930;
  box-shadow: 0px 10px 20px 5px #0B1930;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50px;
  display: relative;
  bottom: 0;
  left: 0;
  background: rgba(10, 25, 47);
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 20px 5px #0B1930;
  box-shadow: 0px 10px 20px 5px #0B1930;
  transform: rotate(180deg);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1268px;
  height: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    width: 100%;
    height: 10%;
    text-align: center;

    h3 {
      font-size: 2rem;
    }
  }

  .container {
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px 25px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . . ."
      ". . . .";
    color: var(--text-first);

    div {
      background: rgba(10, 25, 47, 0.5);
      backdrop-filter: blur(10px);
      padding: 2rem 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      font-size: 3rem;

      &:hover {
        transform: translateY(-2px);
        cursor: pointer;
      }
    }
  }

`;
