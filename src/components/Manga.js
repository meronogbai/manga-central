import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleErrors } from '../actions/fetchManga';
import Loading from './Loading';

const Manga = () => {
  const { id } = useParams();

  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/manga/${id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>
        {title}
      </h1>
      {loading && <Loading />}
    </main>
  );
};

export default Manga;
