import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../firebase/firebaseConfig';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';

import * as s from './AuthProvider.styled';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  console.log(user?.displayName);

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

  // useEffect(() => {
  //   const unsub = auth.onAuthStateChanged(newUser => {
  //     if (newUser != null) {
  //       setUser(newUser);
  //     }
  //   });

  //   return () => unsub();
  // }, [auth]);

  // const handleSignIn = async () => {
  //   try {
  //     const credentials = await signInWithPopup(auth, googleAuthProvider);
  //     setUser(credentials.user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (user != null) {
    return <Phonebook />;
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
