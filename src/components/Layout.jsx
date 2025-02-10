import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
