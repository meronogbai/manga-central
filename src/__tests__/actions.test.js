import {
  fetchMangaBegin, fetchMangaFailure, fetchMangaSuccess, changeFilter,
} from '../actions';

test('fetchMangaBegin returns BEGIN', () => {
  expect(fetchMangaBegin()).toEqual({ type: 'BEGIN' });
});

test('fetchMangaFailure returns FAILURE', () => {
  const error = Error();
  expect(fetchMangaFailure(error)).toEqual({ type: 'FAILURE', error });
});

test('fetchMangaSuccess returns SUCCESS', () => {
  const manga = { title: 'blah', author: 'blah blah' };
  expect(fetchMangaSuccess(manga)).toEqual({ type: 'SUCCESS', manga });
});

test('changeFilter returns CHANGE_FILTER', () => {
  const filter = 'Published';
  expect(changeFilter(filter)).toEqual({ type: 'CHANGE_FILTER', filter });
});
