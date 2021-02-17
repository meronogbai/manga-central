import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchManga from '../actions/fetchManga';

const MangaList = () => {
  const manga = useSelector(state => state.manga);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchManga());
  }, []);
  return (
    <div>
      <h1>Manga List</h1>
      {manga.loading && 'Loading...'}
      {JSON.stringify(manga.items)}
    </div>
  );
};

export default MangaList;
