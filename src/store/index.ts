import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { sagaMiddleware } from './middlewares';
import staticReducers, { history } from './components/reducers';
import staticSagas from './components/sagas';

declare global {
  interface Action {
    type: string;
    payload?: Record<string, unknown>;
  }
}

const createReducer = (asyncReducers = {}) => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

const createSagaInjector = function(runSaga, rootSaga) {
  // Create a dictionary to keep track of injected sagas
  const injectedSagas = new Map();

  const isInjected = (key: string) => injectedSagas.has(key);

  const injectSaga = (key: string, saga: any) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return;

    // Sagas return task when they executed, which can be used
    // to cancel them
    const task = runSaga(saga);

    // Save the task if we want to cancel it in the future
    injectedSagas.set(key, task);
  };

  // Inject the root saga as it a statically loaded file
  return injectSaga('root', rootSaga);
};

const configureStore = (preloadedState = {}) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(
    createReducer(),
    preloadedState,
    composedEnhancers,
  );

  // Add a dictionary to keep track of the registered async reducers
  store['asyncReducers'] = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store['injectReducer'] = (key, asyncReducer) => {
    store['asyncReducers'][key] = asyncReducer;
    store.replaceReducer(createReducer(store['asyncReducers']));
  };

  // Add injectSaga method to our store
  store['injectSaga'] = createSagaInjector(sagaMiddleware.run, staticSagas);

  return store;
};


export default configureStore();
