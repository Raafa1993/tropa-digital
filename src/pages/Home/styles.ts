import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  padding: 10px;
  grid-gap: 20px;
`;
