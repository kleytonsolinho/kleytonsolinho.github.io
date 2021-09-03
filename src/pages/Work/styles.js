import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 80px;
  margin: 0 auto;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  section {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    display: flex;
    scroll-snap-align: start;
    overflow: hidden;

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

      h4 {
        font-size: 1.5rem;
        font-weight: bold;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        line-height: 100px;
      }
    }

    .banner {
      width: 60%;
      height: 100vh;
      display:flex;
      align-items: center;
      justify-content: center;

      img {
        width: 95%;
      }
    }
  }
`;

export const Button = styled.a`
  width: 150px;
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
