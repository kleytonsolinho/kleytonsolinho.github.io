import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 160px);
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-second);

  h1 {
    font-family: 'Arizonia', sans-serif;
    font-size: 1.5rem;
    color: var(--text-second);

    &:hover {
      color: var(--text-first);
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
  }
`;
