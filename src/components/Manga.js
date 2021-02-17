import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Manga = () => {
  const { id } = useParams();
  const [manga, setManga] = useState('Loading..');
  const useFetch = id => {
    useEffect(() => {
      fetch(`https://api.jikan.moe/v3/manga/${id}`)
        .then(res => res.json())
        .then(data => setManga(JSON.stringify(data)));
    }, []);
  };

  useFetch(id);
  return (
    <article>
      <h1>
        Manga
        {' '}
        {id}
      </h1>
      <div>
        {manga}
      </div>
    </article>
  );
};

export default Manga;
