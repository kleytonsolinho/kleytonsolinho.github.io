import styled from 'styled-components';

import imgBg from '../../assets/global-digital.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 850px;
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
  height: 25px;
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
  height: 25px;
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
  height: calc(100% - 50px);
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px 25px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . .";
    color: var(--text-first);

    div {
      background: rgba(10, 25, 47, 0.5);
      backdrop-filter: blur(10px);
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      border: 1px solid rgba(10, 25, 47, 0.2);
      -webkit-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);
      box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);

      &:hover {
        transform: translateY(-5px);
      }

      header {
        //background: aquamarine;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--green);
        font-size: 3rem;
        height: 30%;

        section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.5rem;

          a {
            text-decoration: none;
            color: var(--green);
          }
        }
      }

      h4 {
        //background: purple;
        font-size: 1.2rem;
        height: 20%;
      }

      p {
        //background: coral;
        font-size: 1rem;
        color: var(--text-second);
        height: 40%;
      }

      footer {
        height: 10%;
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        li {
          list-style: none;
          font-size: 0.8rem;
          color: var(--text-second);
        }
      }
    }
  }

`;
