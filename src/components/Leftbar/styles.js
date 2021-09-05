import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  bottom: 0;
  right: -120px;
  left: auto;
  width: 40px;
  height: 100vh;
  display: flex;
  align-items: center;

  animation: FadeInRightbar 2s ease 5s forwards;

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

  @keyframes FadeInRightbar {
    from {
      right: -120px;
    } to {
      right: 20px;
    }
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;
