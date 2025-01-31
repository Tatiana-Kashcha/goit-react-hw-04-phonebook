import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as s from './Layout.styled';

export const Layout = () => {
  return (
    <s.Container>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </s.Container>
  );
};
