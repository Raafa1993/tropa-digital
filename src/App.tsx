import { GlobalStyle } from "./styles/global";

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/routes'

function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
