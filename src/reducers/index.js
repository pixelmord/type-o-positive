import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import keyMap from './keyMap';
import settings from './settings';

const rootReducer = combineReducers({
  keyMap,
  settings,
  routing: routerReducer
});

export default rootReducer;
