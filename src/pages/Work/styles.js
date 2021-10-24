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

  .margin-r {
    width: 100%;
    margin-right: 50px;
  }
`;

export const Developer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;

  display: flex;
  scroll-snap-align: start;

  flex-direction: ${(props) => (props.side % 2 === 0 ? 'row-reverse' : 'row')};
`;

export const DevContainer = styled.div`
  width: 40%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--text-first);

  h3 {
    width: 100%;
    height: 100px;

    position: relative;
    top: 0;
    left: 0;
    z-index: -1;

    font-size: 15rem;
    line-height: 100px;
    color: var(--text-second);
    opacity: 0.05;
  }
`;

export const DevContent = styled.div`
  width: 100%;
  height: 500px;
`;

export const DevTitle = styled.h1`
  font-size: 4.5rem;
  text-align: left;
  background-size: auto auto;
`;

export const DevSubTitle = styled.h2`
  font-size: 1.5rem;
  padding: 10px 0;
  color: var(--text-first);
`;

export const DevDescription = styled.p`
  font-size: 1.2rem;
  padding: 25px 0px;
  color: var(--text-second);
`;

export const DevButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  button {
    margin: 0 10px;
  }
`;

export const Button = styled.a`
  width: 200px;
  height: 45px;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  border: 1px solid var(--green);
  border-radius: 5px;
  font-family: "Poppins" sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: none;
  color: var(--green);

  .icon {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: none;
    background: rgba(80, 250, 123, 0.3);
    font-weight: bold;
    cursor: pointer;
    color: var(--text-first);
  }
`;

export const DevTecnologyContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;

  div {
    width: 25%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
  }

  .tecIcon {
    font-size: 3rem;
  }

  span {
    padding-top: 10px;
  }
`;

export const DevBanner = styled.div`
  width: 60%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 95%;
  }
`;
