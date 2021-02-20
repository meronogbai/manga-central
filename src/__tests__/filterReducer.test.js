import filterReducer, { initialState } from '../reducers/filterReducer';

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    current: 'All',
    possible: ['All', 'Finished', 'Publishing'],
  });
});

test('filterReducer can change filter ', () => {
  const action = {
    type: 'CHANGE_FILTER',
    filter: 'Published',
  };
  expect(filterReducer(initialState, action)).toEqual({
    ...initialState,
    current: 'Published',
  });
});

test('filterReducer doesn\'t change filter when given wrong action ', () => {
  const action = {
    type: 'blah',
    filter: 'Published',
  };
  expect(filterReducer(initialState, action)).not.toEqual({
    ...initialState,
    current: 'Published',
  });
});
