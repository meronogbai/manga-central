import styles from '../styles/Error.module.css';

const Error = () => (
  <main className={styles.error}>
    <div>
      <h1>Oops!</h1>
      <p>Seems like you&apos;ve encoutered an error.</p>
      <img src="https://i.kym-cdn.com/photos/images/original/001/401/347/312.jpg" alt="Error Meme" width="561px" height="265px" />
    </div>
  </main>
);

export default Error;
