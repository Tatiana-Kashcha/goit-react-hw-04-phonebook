import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebase/firebaseConfig';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';

import * as s from './AuthProvider.styled';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const userName = user?.displayName;
  const avatar = user?.photoURL;

  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, newUser => {
      if (newUser) {
        setUser(newUser);
        console.log('user is logged in');
        console.log(newUser); // user object
      } else {
        console.log('user is not logged in');
        console.log(newUser); // null
      }
    });
  }, [auth]);

  if (user != null) {
    return <Phonebook userName={userName} avatar={avatar} user={user} />;
  }

  return (
    <s.Section>
      <s.Container>
        <RegisterForm />
        <LoginForm />
        {/* <s.ButtonAuth onClick={handleSignIn}>Login</s.ButtonAuth> */}
      </s.Container>
    </s.Section>
  );
};
