import Home from './scene/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './scene/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
