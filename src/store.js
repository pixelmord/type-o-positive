import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import initial data
import keyMap from './data/keyMap';

// create an object for the default data
const defaultState = {
  keyMap: keyMap['de-DE'],
  settings: {
    layout: 'de-DE'
  }
};

// create the store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
