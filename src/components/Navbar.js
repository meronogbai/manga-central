import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
      <Link to="/"><FontAwesomeIcon icon={faBook} size="2x" className={styles.logo} /></Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/manga">Top Manga</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
