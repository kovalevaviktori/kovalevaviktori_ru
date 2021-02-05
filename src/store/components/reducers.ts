import { connectRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';

export const history: History = createBrowserHistory<{ test: 1 }>({
  basename: '/',
});

declare global {
  interface Store {}
}

const staticReducers = {
  router: connectRouter(history),
};

export default staticReducers;
