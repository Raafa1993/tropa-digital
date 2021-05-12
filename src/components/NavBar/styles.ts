import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;


width: 240px;
height: 100vh;

position: fixed;

background-color: var(--white);
padding: 20px;

> img {
  margin: 50px 0;
  max-width: 100%;
}

@media (max-width: 580px) {
    width: 160px;
  }
`;
