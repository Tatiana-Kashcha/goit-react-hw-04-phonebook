import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';

import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

export const App = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, newUser => {
      setUser(newUser);
      if (newUser) {
        console.log('user is logged in');
      } else {
        console.log('user is not logged in');
      }
    });
  }, [auth]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
              user={user}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
              user={user}
            />
          }
        />
        <Route path="phonebook" element={<PhonebookPage user={user} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
