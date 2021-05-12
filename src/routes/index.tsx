import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export default Routes;