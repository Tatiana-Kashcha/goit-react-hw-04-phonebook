import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { getAuth } from 'firebase/auth';
import { app } from '../../firebase/firebaseConfig';

import * as s from './Layout.styled';

export const Layout = () => {
  const auth = getAuth(app);
  console.log(auth);

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
