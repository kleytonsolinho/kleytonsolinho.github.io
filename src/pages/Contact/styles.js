import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1268px;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    text-align: center;

    h1 {
      font-size: 7rem;
      text-transform: capitalize;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 45px;
    }

    a {
      text-decoration: none;
    }

    img {
      width: 25%;
    }
  }
`;
