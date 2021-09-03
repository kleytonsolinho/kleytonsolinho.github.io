import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  background: var(--background);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: blink 500ms ease 4s forwards;

  .yarn {
    color: #50fa7b;
  }

  .create {
    color: #ff79c6;
  }

  h1 {
    position: relative;
    width: max-content;
    font-family: 'Poppins', sans-serif;
    opacity: 1;
    transform: translateY(0);

    animation: fadeOutDown 4s ease 0.5s forwards;
  }

  h1::before,
  h1::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  h1::before {
    background: var(--background);
    animation: typewriter 2s steps(36) 1s forwards;
  }

  h1::after {
    width: 0.125em;
    background: white;
    animation:
      typewriter 2s steps(36) 1s forwards,
      blink 500ms steps(36) infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
      display: none;
    }
  }

  @keyframes fadeOutDown {
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
`;
export const Content = styled.div`
  width: 600px;
  height: 300px;
  background: var(--background);
  opacity: 0;
  border: #000;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #333;
  z-index: -1;
  transform: translateY(0);
  -webkit-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);

  animation: FadeInFadeOut 4s ease 0.5s forwards;

  .termHeader {
    height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .termHeader .icon {
    border-radius: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;
  }

  .termHeader .icon:first-of-type {
    background: #ff5f56;
    margin-left: 12px;
  }

  .termHeader .icon:nth-of-type(2) {
    background: #ffbd2e;
    margin-left: 12px;
  }

  .termHeader .icon:nth-of-type(3) {
    background: #27c93f;
    margin-left: 12px;
  }

  .termBody {
    padding: 12px 14px;
    flex: 1 1;
  }
`;
