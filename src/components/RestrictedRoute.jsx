import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  user,
}) => {
  return user ? <Navigate to={redirectTo} /> : Component;
};
