import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchManga from '../actions/fetchManga';

const MangaList = () => {
  const [page, setPage] = useState(1);
  const manga = useSelector(state => state.manga);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchManga(page));
  }, [page]);
  const handleNextClick = () => {
    setPage(page => page + 1);
  };
  const handlePreviousClick = () => {
    setPage(page => (page === 1 ? page : page - 1));
  };
  return (
    <div>
      <h1>Manga List</h1>
      <button type="button" onClick={handlePreviousClick}>Previous</button>
      <button type="button" onClick={handleNextClick}>Next</button>
      {manga.loading && 'Loading...'}
      {JSON.stringify(manga.items)}
    </div>
  );
};

export default MangaList;
