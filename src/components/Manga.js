import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleErrors } from '../actions/fetchManga';
import Loading from './Loading';

const Manga = () => {
  const { id } = useParams();

  const [manga, setManga] = useState({
    title: null,
    image_url: null,
    synopsis: null,
    background: null,
    genres: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/manga/${id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        setManga(data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading && <Loading />}
      <h1>
        {manga.title}
      </h1>

      <img src={manga.image_url} alt={manga.title} />

      <article>
        <h2>{loading || 'Synopsis'}</h2>
        <p>
          {manga.synopsis}
        </p>
      </article>

      <article>
        <h2>{loading || 'Background'}</h2>
        <p>
          {manga.background}
        </p>
      </article>
      <h3>{loading || 'Genres'}</h3>
      <ul>
        {manga.genres.map(genre => <li key={genre.mal_id}>{genre.name}</li>)}
      </ul>
    </main>
  );
};

export default Manga;
