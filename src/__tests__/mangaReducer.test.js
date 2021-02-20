import mangaReducer, { initialState } from '../reducers/mangaReducer';

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    items: [],
    loading: false,
    error: null,
  });
});

test('mangaReducer can BEGIN', () => {
  const action = { type: 'BEGIN' };
  expect(mangaReducer(initialState, action)).toEqual({
    ...initialState,
    items: [],
    loading: true,
    error: null,
  });
});

test('mangaReducer can SUCCEED', () => {
  const action = {
    type: 'SUCCESS',
    manga: 'blah',
  };
  expect(mangaReducer(initialState, action)).toEqual({
    ...initialState,
    items: action.manga,
    loading: false,
    error: null,
  });
});

test('mangaReducer can FAIL', () => {
  const action = {
    type: 'FAILURE',
    error: Error(),
  };
  expect(mangaReducer(initialState, action)).toEqual({
    ...initialState,
    items: [],
    loading: false,
    error: action.error,
  });
});
