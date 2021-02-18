import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchManga from '../actions/fetchManga';
import PaginationButtons from './PaginationButtons';
import styles from '../styles/MangaList.module.css';
import Loading from './Loading';

const MangaList = () => {
  const manga = useSelector(state => state.manga);
  const dispatch = useDispatch();
  const abortController = new AbortController();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchManga(page, abortController));
    return () => {
      abortController.abort();
    };
  }, [page]);
  const handleNextClick = () => {
    setPage(page => page + 1);
  };
  const handlePreviousClick = () => {
    setPage(page => (page === 1 ? page : page - 1));
  };
  return (
    <main>
      <h1>Manga List</h1>
      <PaginationButtons
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
      {manga.loading && <Loading />}
      <section className={styles.mangaList}>
        {manga.items.map(eachManga => (
          <Link to={`/manga/${eachManga.mal_id}`} key={eachManga.mal_id}>
            <img src={eachManga.image_url} alt={eachManga.title} loading="lazy" />
            <h2>{eachManga.title}</h2>
          </Link>
        ))}
      </section>
      <PaginationButtons
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
    </main>
  );
};

export default MangaList;
