import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  padding: 15px;

  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
`;

export const Card = styled.div`
  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 186.5%;
    color: #000000;
  }

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 186.5%;
    color: #000000;
  }

  .image {
    position: relative;
    margin-bottom: 1rem;

    img {
    max-width: 100%;
  }
  }

  .calendar {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.4);
    width: 101px;
    padding: 5px;
    border-radius: 3px;

    span {
      font-size: .8rem;
      color: var(--white);
      margin-left: 5px;
    }
  }

`;