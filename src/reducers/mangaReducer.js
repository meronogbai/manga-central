const initialState = {
  items: [],
  loading: false,
  error: null,
};

const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BEGIN':
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.manga,
      };
    case 'FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }
};

export default mangaReducer;
