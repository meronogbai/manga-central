import { fetchMangaBegin, fetchMangaFailure, fetchMangaSuccess } from '.';

export const handleErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchManga = (page, abortController) => dispatch => {
  dispatch(fetchMangaBegin());
  return fetch(`https://api.jikan.moe/v3/search/manga?q=&order_by=score&page=${page}`,
    { signal: abortController.signal })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMangaSuccess(data.results));
      return data.results;
    })
    .catch(error => {
      if (!abortController.signal.aborted) {
        dispatch(fetchMangaFailure(error));
      }
    });
};

export default fetchManga;
