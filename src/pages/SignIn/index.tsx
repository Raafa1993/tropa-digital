
import { ChangeEvent, FormEvent, useState } from 'react'

import logoIcon from '../../assets/logo.svg'
import background from '../../assets/background.jpg'
import notbook from '../../assets/notbook.png'
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Container, Content, Grid, ContentForm, ContentRight, Icon } from './styles';
import { useHistory } from 'react-router';

function SignIn() {
  const history = useHistory();
  const [name, setName] = useState<string>();
  const [visible, setVisible] = useState(false);

  const inputType = visible ? "text" : "password"

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
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

              <div className="password">
                <input
                  type={inputType}
                  placeholder="Senha"
                />

                <Icon
                  onClick={() => setVisible(visible => !visible)}
                >
                  {visible ? <FiEye /> : <FiEyeOff />}
                </Icon>
              </div>

              <button type="submit">Entrar</button>

            </form>
          </ContentForm>

          <ContentRight>
            <img src={background} alt="Background" />
            <div>
              <img src={notbook} alt="Background" />
            </div>
          </ContentRight>
        </Grid>
      </Content>
    </Container>
  )
}

export default SignIn
