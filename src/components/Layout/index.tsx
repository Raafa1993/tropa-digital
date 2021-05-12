import Header from '../../pages/Header'
import Home from '../../pages/Home'
import NavBar from '../NavBar'

import { Grid, GridNav, GridHeader, GridMain } from './styles';

function index({ children, ...rest }: any) {
  return (
    <Grid>
      <GridNav>
        <NavBar />
      </GridNav>

      <GridHeader>
        <Header />
      </GridHeader>

      <GridMain>
        <Home />
      </GridMain>

    </Grid>
  )
}

export default index
