import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;

  margin-bottom: 8px;
  padding: 0 10px;

  background: var(--green);

  font-size: 1rem;
  font-weight: bold;
  color: var(--white);

  opacity: 0.9;


  img {
    width: 20px;
    margin-right: 10px;
    color: var(--white);
  }

  &:hover, &.active {
    background: var(--background);
    color: #000;
    img {
      color: var(--green);
    }
  } 

  &.active {
    opacity: 1;
  }

  &.home {
    background: red;
  }
`;
