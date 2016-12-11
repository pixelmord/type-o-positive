import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import './index.css';

import store, { history } from './store';

import Root from './containers/Root';
import LessonIndex from './components/LessonIndex/LessonIndex';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={LessonIndex}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
