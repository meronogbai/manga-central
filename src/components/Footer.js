import { useLocation } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const location = useLocation();
  const bottom = location.pathname !== '/manga' ? styles.fixedBottom : '';
  return (
    <footer className={`${styles.footer} ${bottom}`}>
      Made with
      {' '}
      <span role="img" aria-label="heart">❤️</span>
      {' '}
      by Meron Ogbai
      {/* {JSON.stringify(location.pathname)} */}
    </footer>
  );
};

export default Footer;
