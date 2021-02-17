import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Error';
import Home from './Home';

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
