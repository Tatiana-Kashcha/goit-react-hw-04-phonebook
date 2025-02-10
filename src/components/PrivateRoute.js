import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  user,
}) => {
  return !user ? <Navigate to={redirectTo} /> : Component;
};
