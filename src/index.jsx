import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './state';

import './app.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          component={Routes}
          path="/"
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
