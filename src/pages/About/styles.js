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
    max-height: 100%;

    text-align: center;
    flex-wrap: wrap;

    .perfil,
    .content {
      width: 100% !important;
    }

    .perfil h1,
    .perfil h2,
    .perfil h3 {
      font-size: 3rem !important;
    }

    .content article section {
      width: 100% !important;
      margin-bottom: 100px;
    }
  }
`;

export const PerfilImage = styled.div`
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
    position: absolute;
    top: 0;
    left: 0;

    font-size: 8rem;
    opacity: 0.7;

    writing-mode: vertical-rl;
    transform: rotate(180deg);
    white-space: nowrap;

    &:hover {
      opacity: 1;
    }
  }

  h3 {
    position: absolute;
    bottom: 50px;
    right: 0;

    font-size: 4rem;
    opacity: 0.5;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PerfilContent = styled.article`
  width: 60%;
  height: 100%;
  padding: 0 25px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--text-second);

  h1 {
    font-size: 5rem;
    background-size: 150% 150%;
  }

  p {
    font-size: 1.3rem;
    padding: 10px 0;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.1rem;
`;

export const ListTecnology = styled.ul`
  list-style: circle;
`;
