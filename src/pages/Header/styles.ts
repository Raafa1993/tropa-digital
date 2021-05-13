import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      font-weight: normal;
      color: var(--text-title);
      margin: 5px 0;
    }

    span {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--text-title);
      margin-left: 10px;
    }
  }

`;

export const Separator = styled.div`
    border-bottom: 2px solid #DBDBDB;
    width: 100%;
`;
