import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: 100vh;
  max-height: 800px;
  padding-top: 50px;
  margin: 0 auto;
  scroll-snap-align: start;
  display: flex;
  align-items: center;

  @media (max-width: 830px) {
    height: 100% !important;
    text-align: center;
    flex-wrap: wrap;
    max-height: 100%;

    .perfil, .content {
      width: 100% !important;
    }

    .perfil h1, .perfil h2, .perfil h3 {
      font-size: 3rem !important;
    }

    .content article section {
      width: 100% !important;
      margin-bottom: 100px;
    }
  }

  .perfil {
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      position: relative;
      z-index: -1;
    }

    h2 {
      writing-mode: vertical-rl;
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
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: var(--text-second);
    position: relative;

    article {

      h1 {
        font-size: 5rem;
        background-size: 150% 150%;
      }

      p {
        font-size: 1.3rem;
        padding: 10px 0;
      }

      section {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.1rem;
        padding-left: 20px;

        ul {
          list-style: circle;
        }
      }
    }

  }
`;
