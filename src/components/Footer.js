import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    Made with
    {' '}
    <span role="img" aria-label="heart">❤️</span>
    {' '}
    by Meron Ogbai
  </footer>
);

export default Footer;
