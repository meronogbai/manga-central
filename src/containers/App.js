import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MangaList from './MangaList';
import Error from '../components/Error';
import Home from '../components/Home';
import Manga from '../components/Manga';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';

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
