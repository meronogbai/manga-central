export const fetchMangaBegin = () => ({
  type: 'BEGIN',
});

export const fetchMangaSuccess = manga => ({
  type: 'SUCCESS',
  manga,
});

export const fetchMangaFailure = error => ({
  type: 'FAILURE',
  error,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
