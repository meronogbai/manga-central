import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" value={manga} onChange={handleChange} placeholder="Manga" required pattern="\S.*" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Search;
