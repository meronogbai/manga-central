import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => (
  <main className={styles.home}>
    <div>
      <h1>Manga Central</h1>
      <Link to="/manga" className={styles.cta}>Top Manga</Link>
    </div>
  </main>
);

export default Home;
