import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/Search.module.css';

const Search = () => {
  const [manga, setManga] = useState('');
  const history = useHistory();
  const handleChange = e => {
    setManga(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    history.push({
      pathname: '/manga',
      search: `?q=${manga.replace(' ', '%20')}`,
    });
  };
  return (
    <main className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={manga} onChange={handleChange} placeholder="Manga" required pattern="\S.*" minLength="3" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Search;
