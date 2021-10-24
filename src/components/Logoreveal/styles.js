import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;

  background: var(--background);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: blink 500ms ease 8s forwards;

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;

export const Logo = styled.div`
  width: 300px;

  position: absolute;
  z-index: 12;

  align-items: center;
  justify-content: center;

  margin-bottom: 25px;

  .p1 {
    stroke-dasharray: 5000;
    stroke-dashoffset: 5000;

    animation: animate 6s linear 1s forwards, svgFadeOut 1s ease 8s forwards;
  }

  @keyframes animate {
    from {
      stroke-dasharray: 5000;
      stroke-dashoffset: 5000;
    }
    to {
      stroke-dasharray: 0;
      stroke-dashoffset: 0;
    }
  }

  @keyframes svgFadeOut {
    from {
      stroke-width: 30;
    }
    to {
      stroke-width: 0;
    }
  }
`;
