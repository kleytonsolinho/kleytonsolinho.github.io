import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 160px);
  height: calc(100vh - 100px);
  margin: 0 auto;
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
