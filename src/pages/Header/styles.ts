import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 10px;

  h1 {
    font-size: 2.5rem;
    color: var(--text-title);

    margin: 5px 0;
  }
`;

export const Separator = styled.div`
    border-bottom: 2px solid #DBDBDB;
    width: 100%;
`;
