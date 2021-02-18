const initialState = {
  current: 'All',
  possible: ['All', 'Finished', 'Publishing'],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, current: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
