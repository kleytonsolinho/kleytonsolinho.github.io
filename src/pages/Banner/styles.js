import styled from 'styled-components';

import imgBanner1 from '../../assets/images/banner-1.png';
import imgBanner2 from '../../assets/images/banner-2.png';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;

  scroll-snap-align: start;

  @media (max-width: 830px) {
    width: 100%;
    padding: 0 20px;

    #home {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #box1 {
      width: 100% !important;
      height: 100% !important;

      position: absolute;
      bottom: -10% !important;
      left: 25% !important;
      z-index: -1;

      display: none;
      opacity: 0.5;
    }

    #box2 {
      z-index: 1;
      text-align: center;
      top: 25% !important;
    }

    #box2,
    p {
      font-size: 4rem;
      margin-left: 0 !important;
    }

    #box3 {
      display: none;
    }
  }

  #box1 {
    width: 530px;
    height: 625px;

    position: absolute;
    bottom: -100%;
    left: 30%;

    background-image: url(${imgBanner1});

    animation: anim 2s ease 500ms forwards, anim2 2s ease 2.5s forwards;
  }

  #box1:after {
    content: "";
    position: absolute;
    width: 530px;
    height: 625px;
    background-image: url(${imgBanner2});
    left: 0px;
  }

  #box2 {
    width: auto;
    height: auto;

    position: relative;
    top: 15%;
    z-index: -1;

    overflow: hidden;

    font-family: "Poppins", sans-serif;
    font-size: 6rem;
    font-weight: 600;
    line-height: 100%;
    color: #fff;

    p {
      background-size: 50% 50%;
    }

    p:nth-child(2) {
      margin-left: 50px;
    }

    p:nth-child(3) {
      background-size: 45% 45%;
      margin-left: 100px;
    }
  }

  #box3 {
    width: auto;
    height: auto;

    position: relative;
    z-index: -1;
    top: 30%;

    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 100%;
    color: #8892b0;
    overflow: hidden;
  }

  .text {
    position: relative;
    left: -100%;
    opacity: 0;

    animation: anim3 2s ease 2.5s forwards;
  }

  .wrapper {
    display: inline-flex;
  }

  div {
    color: #8892b0;

    p:nth-of-type(2) {
      margin-top: 10px;
    }
  }

  @keyframes anim {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0%;
    }
  }

  @keyframes anim2 {
    from {
      left: 30%;
      width: 530px;
    }
    to {
      width: 0px;
      left: 50%;
    }
  }

  @keyframes anim3 {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 2%;
      opacity: 1;
    }
  }
`;
