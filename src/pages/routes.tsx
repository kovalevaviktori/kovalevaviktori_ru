import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { Header, Loader } from '../components';

import { ProtectedRoute } from './ProtectedRoute';

// import { StyleProps, useStyles } from './routes.styles';

interface RouteInfo {
  path: string;
  component: React.FC;
  exact: boolean;
  isProtected?: boolean;
}

const LoadPage = (pageName: string) => lazy(
  () => Promise.all([
    import(`./${pageName}/${pageName}`),
    new Promise(resolve => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports),
);

const Home = LoadPage('Home');
const About = LoadPage('About');
const Biotoria = LoadPage('Biotoria');

const routes: RouteInfo[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/biotoriya',
    component: Biotoria,
    exact: true,
  },
  // {
  //   path: '*',
  //   component: NotFoundPage,
  //   exact: false,
  //   isProtected: false,
  // },
];

interface RouteMapProps {}

const RouteMap: React.FC<RouteMapProps> = function (props) {
  const { location } = useHistory();

  const isAuthenticated = true;

  const availableRoutes: RouteInfo[] = isAuthenticated ? routes.filter(route => route.path !== '/login') : routes;

  const { state } = location;
  // const redirectTo: string = get(state, 'from', '/request/new');

  return (
    <>
      <Header />

      <Suspense fallback={<Loader/>}>
        <Switch>
          {availableRoutes.map(({ isProtected, ...item }) => (
            isProtected ? <ProtectedRoute isAuthenticated={isAuthenticated} {...item} key={item.path}/> : <Route {...item} key={item.path}/>)
          )}

          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default RouteMap;
