

import Cards from '../../components/cards'
import NavBar from '../../components/NavBar';
import Header from '../Header';

import { Grid, GridNav, GridHeader, GridMain } from './styles';

function Home() {
  return (
    <Grid>

      <GridNav>
        <NavBar />
      </GridNav>

      <GridHeader>
        <Header />
      </GridHeader>

      <GridMain>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </GridMain>

    </Grid>
  )
}

export default Home
