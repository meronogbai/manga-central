import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleErrors } from '../actions/fetchManga';
import Loading from './Loading';
import styles from '../styles/Manga.module.css';

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
        <div className={styles.wrapper}>
          <article className={styles.main}>
            <img src={manga.image_url} alt={manga.title} />
            <div>
              <strong>Author(s): </strong>
              {manga.authors.map(author => author.name.replace(', ', ' ')).join(', ')}
            </div>
            <div>
              <strong>Status: </strong>
              {manga.status}
            </div>
            <div>
              <strong>Genres: </strong>
              {manga.genres.map(genre => genre.name).join(', ')}
            </div>
          </article>
          <div>
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
          </div>
        </div>
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
