import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: -120px;
  left: auto;
  width: 40px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: FadeInRightbar 2s ease 12s forwards;

  a {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--text-second);
    text-decoration: none;

    &:hover {
      color: var(--green);
    }
  }

  div {
    display: flex;
    transform: rotate(90deg);
  }

  .icon {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 1.2rem;
    color: var(--text-second);
    margin-bottom: 15px;
  }

  @keyframes FadeInRightbar {
    from {
      right: -120px;
    } to {
      right: 40px;
    }
  }
`;
