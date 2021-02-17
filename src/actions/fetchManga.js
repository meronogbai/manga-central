import { fetchMangaBegin, fetchMangaFailure, fetchMangaSuccess } from '.';

const handleErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchManga = page => dispatch => {
  dispatch(fetchMangaBegin());
  return fetch(`https://api.jikan.moe/v3/search/manga?q=&order_by=score&page=${page}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMangaSuccess(data.results));
      return data.results;
    })
    .catch(error => dispatch(fetchMangaFailure(error)));
};

export default fetchManga;
