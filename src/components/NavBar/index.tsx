
import logoImg from '../../assets/logo.svg';
import homeIcon from '../../assets/homeIcon.svg';
import contactIcon from '../../assets/contactIcon.svg';
import reportIcon from '../../assets/reportIcon.svg';

import NavButton from '../NavButton';

import { Container } from './styles';

function NavBar() {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Logo" />


        <NavButton
          selected
        >
          <img src={homeIcon} alt="Icone" />
          Inicio
        </NavButton>

        <NavButton>
          <img src={contactIcon} alt="Icone" />
          Contatos
        </NavButton>

        <NavButton>
          <img src={reportIcon} alt="Icone" />
          Relatorios
        </NavButton>

        <NavButton>
          <img src={contactIcon} alt="Icone" />
          Contatos
        </NavButton>



      </Container>
    </>
  )
}

export default NavBar
