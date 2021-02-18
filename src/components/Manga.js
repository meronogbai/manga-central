import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleErrors } from '../actions/fetchManga';
import Loading from './Loading';

const Manga = () => {
  const { id } = useParams();

  const [manga, setManga] = useState();
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

  let content;

  if (!loading) {
    content = (
      <main>
        <h1>
          {manga.title}
        </h1>

        <div>
          <img src={manga.image_url} alt={manga.title} />
          <div>
            <strong>Status: </strong>
            {manga.status}
          </div>
          <div>
            <strong>Author(s): </strong>
            {manga.authors.map(author => author.name.replace(', ', ' ')).join(', ')}
          </div>
        </div>

        <article>
          <h2>Synopsis</h2>
          <p>
            {manga.synopsis}
          </p>
        </article>

        <article>
          <h2>Background</h2>
          <p>
            {manga.background}
          </p>
        </article>
        <h3>Genres</h3>
        <ul>
          {manga.genres.map(genre => <li key={genre.mal_id}>{genre.name}</li>)}
        </ul>
      </main>
    );
  } else {
    content = <Loading />;
  }
  return (
    <>
      { content}
    </>
  );
};

export default Manga;
