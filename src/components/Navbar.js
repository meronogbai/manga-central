import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/">Home</Link>
    <Link to="/manga">Manga List</Link>
  </nav>
);

export default Navbar;
