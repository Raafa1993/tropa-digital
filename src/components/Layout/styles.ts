import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 260px auto;
  grid-template-rows: 74px auto;

  grid-template-areas:
    'nav header'
    'nav main';

  height: 100vh;

  @media (max-width: 580px) {
    grid-template-columns: 160px auto;
  }
`;

export const GridNav = styled.div`
  grid-area: nav;
`;

export const GridHeader = styled.header`
  grid-area: header;
`;

export const GridMain = styled.main`
  grid-area: main;

`;
