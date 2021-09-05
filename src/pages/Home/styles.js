import styled from 'styled-components';

import imgBanner1 from '../../assets/banner-1.png';
import imgBanner2 from '../../assets/banner-2.png';

export const Container = styled.section`
  width: calc(100% - 160px);
  max-width: 1268px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  margin-top: 100px;

  #box1 {
    width: 530px;
    height: 625px;
    background-image: url(${imgBanner1});
    position: absolute;
    bottom: -100%;
    left: 30%;
    animation: anim 2s ease 500ms forwards, anim2 2s ease 2.5s forwards;
  }

  #box1:after {
    content: '';
    position: absolute;
    width: 530px;
    height: 625px;
    background-image: url(${imgBanner2});
    left: 0px;
  }

  #box2 {
    width: auto;
    height: auto;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 6rem;
    font-weight: 600;
    line-height: 100%;
    position: relative;
    top: 15%;
    left: 100px;
    overflow: hidden;
    z-index: -1;

    p {
      background-size: 100% 100%;
    }

    span {
      background-size: auto auto;
    }
  }

  #box3 {
    width: auto;
    height: auto;
    font-family: 'Poppins', sans-serif;
    color: #8892b0;
    font-size: 2rem;
    font-weight: 400;
    line-height: 100%;
    position: relative;
    top: 30%;
    left: 100px;
    overflow: hidden;
    z-index: -1;
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

  .static-text {
    color: #fff;
  }

  .dynamic-txts {
    margin-left: 10px;
    height: 24px;
    line-height: 24px;
    //background: red;
    overflow: hidden;
  }

  .dynamic-txts li {
    list-style: none;
    position: relative;
    top: 0;

    animation: slide 8s steps(4) infinite;
  }

  .dynamic-txts li span {
    position: relative;
  }

  .dynamic-txts li span::after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--background);
    border-left: 2px solid #fff;

    animation: typing 1.2s steps(10) infinite 4s forwards;
  }

  @keyframes anim {
    from {
      bottom: -100%;
    } to {
      bottom: 0%;
    }
  }

  @keyframes anim2 {
    from {
      left: 30%;
      width: 530px;
    } to {
      width: 0px;
      left: 50%;
    }
  }

  @keyframes anim3 {
    from {
      left: -100%;
      opacity: 0;
    } to {
      left: 10%;
      opacity: 1;
    }
  }

  @keyframes typing {
    to {
      left: 100%;
      margin: 0 -35px 0 35px;
    }
  }

  @keyframes slide {
    to {
      top: -95px;
    }
  }
`;
