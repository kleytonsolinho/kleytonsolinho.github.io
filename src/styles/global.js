import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --background: #0b1930;
    --green: #00ff98;
    --text-first: #ffffff;
    --text-second: #8892b0;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: var(--green);
  }

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: var(--background);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--green);
  border-radius: 20px;
}

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    scrollbar-color: #50fa7b var(--background);

    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-first);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .stroke {
      background: linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7);
      background-size: 100% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-stroke: 5px transparent;
      color: var(--background);

      &:hover {
        -webkit-text-stroke: 0px transparent;
        color: transparent;
      }
    }

    .stroke-invert {
      background: linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7);
      background-size: 200% 200%;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-stroke: 0px transparent;
      color: transparent;

      &:hover {
        -webkit-text-stroke: 5px transparent;
        color: var(--background);
      }
    }

    @keyframes FadeInFadeOut {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    } 25% {
      opacity: 0.50;
      transform: translateY(0rem);
    } 50% {
      opacity: 0.50;
      transform: translateY(0rem);
    } 75% {
      opacity: 0.50;
      transform: translateY(0rem);
    } 100% {
      opacity: 0;
      transform: translateY(3rem);
    }
  }

  @keyframes FadeInFadeOut100 {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    } 25% {
      opacity: 1;
      transform: translateY(0rem);
    } 50% {
      opacity: 1;
      transform: translateY(0rem);
    } 75% {
      opacity: 1;
      transform: translateY(0rem);
    } 100% {
      opacity: 0;
      transform: translateY(3rem);
    }
  }

  @keyframes FadeInNavbar {
    from {
      top: -100%;
    } to {
      top: 0%;
    }
  }

  @keyframes FadeOutNavbar {
    from {
      top: 0%;
    } to {
      top: -100%;
    }
  }
`;
