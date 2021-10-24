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

  @media (max-width: 830px) {
    height: calc(100% - 100px) !important;
    flex-wrap: wrap;
    padding: 0 50px;

    .content a h1 {
      font-size: 5rem !important;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  a {
    text-decoration: none;

    h1 {
      font-size: 7rem;
      text-transform: capitalize;
    }
  }

  img {
    width: 25%;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 45px;
`;
