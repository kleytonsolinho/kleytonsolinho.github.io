import styled from 'styled-components';

import imgBg from '../../assets/images/global-digital-2.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  scroll-snap-align: start;

  @media screen and (max-width: 782px) {
    height: 200vh;
  }

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
  -webkit-box-shadow: 0px 10px 20px 5px #0b1930;
  box-shadow: 0px 10px 20px 5px #0b1930;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 25px;

  display: relative;
  bottom: 0;
  left: 0;

  background: rgba(10, 25, 47);

  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 20px 5px #0b1930;
  box-shadow: 0px 10px 20px 5px #0b1930;

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
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;

  @media screen and (max-width: 782px) {
    height: 5%;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const CardContainer = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px 25px;

  color: var(--text-first);
`;

export const CardContent = styled.div`
  padding: 1.75rem;

  display: flex;
  flex-direction: column;

  background: rgba(10, 25, 47, 0.5);
  backdrop-filter: blur(4px);

  border: 1px solid rgba(10, 25, 47, 0.2);
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--green);
  font-size: 2.5rem;
  height: 30%;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: var(--green);
  }

  a:nth-child(1) {
    margin-right: 10px;
  }
`;

export const CardTitle = styled.h4`
  height: 20%;
  font-size: 1.2rem;
`;

export const CardDescription = styled.p`
  height: 40%;

  font-size: 1rem;
  color: var(--text-second);
`;

export const CardFooter = styled.footer`
  height: 10%;
`;

export const ListTecnologys = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    list-style: none;
    font-size: 0.8rem;
    color: var(--text-second);
  }
`;
