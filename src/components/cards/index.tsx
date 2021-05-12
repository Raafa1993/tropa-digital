
import paisagemFoto from '../../assets/paisagem.png';
import calendarIcon from '../../assets/calendarIcon.svg';

import { Cards, Card } from './styles'

function index() {
  return (
    <Cards>
      <Card>
        <div className="image">
          <img src={paisagemFoto} alt="foto" />
          <div className="calendar">
            <img src={calendarIcon} alt="icone" />
            <span>2min atrás</span>
          </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
        <span>Lorem Ipsum is simply dummy text of the printing and typesettin.</span>
      </Card>
    </Cards>
  )
}

export default index
