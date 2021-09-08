import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  min-height: 100vh;
  background: var(--background);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: blink 500ms ease 8s forwards;

  div {
    position: absolute;
    width: 300px;
    align-items: center;
    justify-content: center;
    z-index: 12;
    margin-bottom: 25px;
  }

  .p1 {
    stroke-dasharray: 5000;
    stroke-dashoffset: 5000;

    animation:
      animate 6s linear 1s forwards,
      svgFadeOut 1s ease 8s forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 0;
      transform: translateY(3rem);
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }

  @keyframes animate {
    from {
      stroke-dasharray: 5000;
      stroke-dashoffset: 5000;
    } to {
      stroke-dasharray: 0;
      stroke-dashoffset: 0;
    }
  }

  @keyframes svgFadeOut {
    from {
      stroke-width: 30;
    } to {
      stroke-width: 0; //alterar aqui
    }
  }
`;
