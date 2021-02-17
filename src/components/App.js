import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MangaList from '../containers/MangaList';
import Error from './Error';
import Home from './Home';
import Manga from './Manga';
import Navbar from './Navbar';

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/manga" component={MangaList} />
        <Route path="/manga/:id" component={Manga} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
