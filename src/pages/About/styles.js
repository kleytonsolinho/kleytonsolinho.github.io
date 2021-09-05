import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: 100vh;
  max-height: 800px;
  margin: 0 auto;

  .perfil {
    position: relative;
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      position: relative;
      z-index: -1;
    }

    h2 {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      white-space: nowrap;
      font-size: 8rem;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }

    h3 {
      position: absolute;
      bottom: 50px;
      right: 0;
      text-align: center;
      opacity: 0.5;
      font-size: 4rem;

      &:hover {
        opacity: 1;
      }
    }
  }

  .content {
    width: 60%;
    height: 100%;
    float: right;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #fff;
    position: relative;

    h1 {
      font-size: 5rem;
      text-align: center;
    }

    p {
      font-size: 1.3rem;
      padding: 10px 0;
    }
  }
`;
