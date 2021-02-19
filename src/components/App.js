import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MangaList from '../containers/MangaList';
import Error from './Error';
import Home from './Home';
import Manga from './Manga';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/manga" component={MangaList} />
        <Route exact path="/manga/:id" component={Manga} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
