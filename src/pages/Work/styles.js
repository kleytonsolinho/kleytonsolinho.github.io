import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: 100%;
  margin: 0 auto;

  section {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    display: flex;

    .container {
      width: 40%;
      height: 100vh;
      color: var(--text-first);

      h3 {
        font-size: 2.5rem;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        line-height: 100px;
      }

      .content {
        width: 100%;
        height: calc(100% - 200px);

        h1 {
          font-size: 4.5rem;
          text-align: left;
          background-size: auto auto;
        }

        h2 {
          font-size: 1.5rem;
          padding: 10px 0;
        }

        p {
          font-size: 1.2rem;
          padding: 25px 0px;
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
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;

        }
      }
    }

    .banner {
      width: 60%;
      height: 100vh;
      display:flex;
      align-items: center;
      justify-content: center;

      img {
        height: 95%;
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
