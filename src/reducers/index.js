import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import mangaReducer from './mangaReducer';

const rootReducer = combineReducers({
  manga: mangaReducer,
  filter: filterReducer,
});

export default rootReducer;
