import { combineReducers } from 'redux';
import mangaReducer from './mangaReducer';

const rootReducer = combineReducers({
  manga: mangaReducer,
});

export default rootReducer;
