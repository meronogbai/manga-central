import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fetchManga, { url } from '../actions/fetchManga';
import PaginationButtons from './PaginationButtons';
import styles from '../styles/MangaList.module.css';
import Loading from './Loading';
import StatusFilter from './StatusFilter';

const MangaList = () => {
  const history = useHistory();
  const location = useLocation();
  const manga = useSelector(state => state.manga);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const abortController = new AbortController();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchManga(url, location.search.slice(3), page, abortController));
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
  const filterStatus = item => {
    if (filter.current === 'Publishing') {
      return item.publishing === true;
    }
    if (filter.current === 'Finished') {
      return item.publishing === false;
    }
    return true;
  };
  if (manga.error) {
    history.push('/error');
  }
  return (
    <main>
      <h1>
        View
        <StatusFilter />
        Manga
      </h1>
      <PaginationButtons
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
      {manga.loading && <Loading />}
      <section className={styles.mangaList}>
        {(manga.items.filter(item => filterStatus(item)))
          .map(eachManga => (
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
