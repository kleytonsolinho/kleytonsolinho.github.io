import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 830px) {

    section {
      max-height: 100% !important;
      flex-wrap: wrap-reverse !important;
    }

    section .right {
      flex-wrap: wrap-reverse;
    }

    section .container {
      width: 100% !important;
      flex-wrap: wrap-reverse;
      text-align: center;
      margin-bottom: 100px;
    }

    section .container .content h1 {
      text-align: center !important;
    }

    section .container .content div a {
      flex-direction: column;
    flex-wrap: wrap;
    width: 100% !important;
    }

    section .banner {
      width: 100% !important;
      height: 50% !important;
      flex-wrap: wrap;
    }
  }

  .right {
    flex-direction: row-reverse;
  }

  .left {
    flex-direction: row;
  }

  .margin-r {
    margin-right: 50px;
    width: 100%;
  }

  section {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    display: flex;
    scroll-snap-align: start;

    .container {
      width: 40%;
      height: 100vh;
      color: var(--text-first);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        font-size: 15rem;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        line-height: 100px;
        z-index: -1;
        color: var(--text-second);
        opacity: 0.05;
      }

      .content {
        width: 100%;
        height: 500px;

        h1 {
          font-size: 4.5rem;
          text-align: left;
          background-size: auto auto;
        }

        h2 {
          font-size: 1.5rem;
          padding: 10px 0;
          color: var(--text-first);
        }

        p {
          font-size: 1.2rem;
          padding: 25px 0px;
          color: var(--text-second);
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;

          a {
            text-decoration: none;
          }
        }

        button {
          margin: 0 10px;
        }

      }

      .tecnology {
        width: 100%;
        height: 100px;

        div {
          width: 25%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
        }

        .tec-icon {
          font-size: 3rem;
        }

        span {
          padding-top: 10px;
        }
      }
    }

    .banner {
      width: 60%;
      height: 100vh;
      display:flex;
      align-items: center;
      justify-content: center;

      .img-h {
        height: 95%;
      }

      .img-w {
        width: 95%;
      }
    }
  }
`;

export const Button = styled.a`
  width: 175px;
  height: 45px;
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Poppins' sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 25px;

  .icon {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: none;
    background: rgba(80,250,123,0.3);
    font-weight: bold;
    cursor: pointer;
    color: var(--text-first);
  }
`;
