import styled from 'styled-components';

export const Container = styled.aside`
  width: 40px;
  height: 100vh;

  position: fixed;
  bottom: 0;
  right: -120px;
  left: auto;

  display: flex;
  align-items: center;

  animation: FadeInRightbar 2s ease 5s forwards;

  @keyframes FadeInRightbar {
    from {
      right: -120px;
    }
    to {
      right: 20px;
    }
  }
`;

export const IconList = styled.div``;

export const Icon = styled.div`
  width: 100%;
  margin-bottom: 20px;

  position: relative;

  display: flex;
  justify-content: center;

  cursor: pointer;

  .icone {
    cursor: pointer;
    color: #8892b0;
    font-size: 1.8rem;
    position: relative;

    &:hover {
      color: #fff;
      top: -2px;
    }
  }
`;
