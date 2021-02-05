import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import store from './store';
import { history } from './store/components/reducers';

import RouteMap from './pages/routes';

import './index.module.scss';

interface AppProps {}

const App: React.FC<AppProps> = function () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouteMap />
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
