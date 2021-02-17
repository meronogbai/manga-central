import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchManga from '../actions/fetchManga';

const MangaList = () => {
  const manga = useSelector(state => state.manga.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchManga());
  }, []);
  return (
    <div>
      <h1>Manga List</h1>
      {JSON.stringify(manga)}
    </div>
  );
};

export default MangaList;
