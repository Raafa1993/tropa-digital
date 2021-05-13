import styled from "styled-components";

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  gap: 4rem;
  background: var(--white);
  border-radius: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  max-width: 700px;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 40px 0;
    max-width: 340px;
    text-align: center;
    width: 100%;
  }

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--text-title);
  }

  span {
    font-size: 2rem;
    font-weight: bold;
    color: var(--orange);
    margin-left: 10px;
  }
}

  input {
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 400;
    color: var(--subtitle);

    width: 100%;
    height: 44px;
    border-radius: .5rem;
    border: 1px solid #ECECEC;
    padding: 1rem;
    background: var(--text);

    &::placeholder {
      color: #000;
    }

  }

  .password {
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 400;
    color: var(--subtitle);

    width: 100%;
    height: 44px;
    border-radius: .5rem;
    border-radius: .5rem;
    border: 1px solid #ECECEC;
    background: var(--text);

    margin-top: 13px;
  }

  .password:focus-within {
    border: 2px  #000 solid;
  }

  input[type="password"],
  input[type="text"] {
    font-size: 1rem;
    font-weight: 400;
    color: var(--subtitle);

    width: 100%;
    height: 44px;
    border-radius: .5rem;
    border: none;
    outline: none;
    padding: 1rem;
    background: var(--text);
  }
  
  button {
    background: var(--green);
    padding: 0 16px;
    margin-top: 13px;

    border: none;
    border-radius: .5rem;

    width: 44%;
    height: 40px;

    font-size: .8rem;
    font-weight: bold;
    color: var(--white);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  div {
    position: absolute;
    width: 100px;
    top: 99px;
    right: 0;
    left: -50px;
    bottom: 0;
  }

  @media (max-width: 760px) {
    display: none;
  }
`
