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
