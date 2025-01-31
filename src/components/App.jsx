// import { AuthProvider } from 'components/AuthProvider/AuthProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
  // return (
  //   <>
  //     <AuthProvider />
  //   </>
  // );
};

// export default App;
