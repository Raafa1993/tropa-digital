
import React, { ChangeEvent, FormEvent, useState } from 'react'

import logoIcon from '../../assets/logo.svg'
import background from '../../assets/background.jpg'
import notbook from '../../assets/notbook.png'

import { Container, Content, Grid, ContentForm, ContentRight } from './styles';
import { useHistory } from 'react-router';

function SignIn() {
  const history = useHistory();
  const [name, setName] = useState<string>()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  async function handleSubimit(event: FormEvent) {
    event.preventDefault();
    if (!name)
      return alert('Insira um e-mail valido 😀')

    await localStorage.setItem('@tropa:user', name);

    alert('Bem vindo!')

    history.push('/home');
  }

  return (
    <Container>
      <Content>
        <Grid>
          <ContentForm>
            <img src={logoIcon} alt="logo" />

            <form onSubmit={handleSubimit}>
              <div className="title">
                <h1>Bem vindo ao</h1>
                <span> painel </span>
              </div>

              <input
                type="email"
                name="name"
                placeholder="Digite seu e-mail"
                onChange={handleInputChange}
              />

              <input
                type="password"
                placeholder="Senha"
              />

              <button type="submit">Entrar</button>

            </form>

          </ContentForm>

          <ContentRight>
            <img src={background} alt="" />
            <div>
              <img src={notbook} alt="" />
            </div>
          </ContentRight>
        </Grid>
      </Content>
    </Container>
  )
}

export default SignIn
