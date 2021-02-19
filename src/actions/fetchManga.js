import { fetchMangaBegin, fetchMangaFailure, fetchMangaSuccess } from '.';

export const url = 'https://api.jikan.moe/v3/search/manga';

export const handleErrors = response => {
  if (!response.ok) {
    throw new Error();
  }
  return response;
};

const fetchManga = (url, search, page, abortController) => dispatch => {
  dispatch(fetchMangaBegin());
  let api;
  if (search === '') {
    api = `${url}?q=&order_by=score&page=${page}`;
  } else {
    api = `${url}?q=${search}&page=${page}&genre=12&genre_exclude=0`;
  }
  return fetch(api,
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
