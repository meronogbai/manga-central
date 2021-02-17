import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
