import React from 'react';
import {
  Redirect,
  Route,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<RouteComponentProps>;
  location?: RouteProps['location'];
}

export const ProtectedRoute: React.FC <ProtectedRouteProps> = function({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  const { location } = rest;
  const { pathname = '', search = '' } = location;

  const from = (pathname && `${pathname}${search}`) || '/';

  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', search: `?redirect=${from}`, state: { from } }} />
      )}
    />
  );
};

export default ProtectedRoute;
