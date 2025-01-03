import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../firebase/firebaseConfig';
import { Phonebook } from 'components/Phonebook/Phonebook';

import * as s from './AuthProvider.styled';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(newUser => {
      if (newUser != null) {
        setUser(newUser);
      }
    });

    return () => unsub();
  }, [auth]);

  const handleSignIn = async () => {
    try {
      const credentials = await signInWithPopup(auth, googleAuthProvider);
      setUser(credentials.user);
    } catch (error) {
      console.log(error);
    }
  };

  if (user != null) {
    return <Phonebook />;
  }

  return (
    <s.Section>
      <s.Container>
        <s.ButtonAuth onClick={handleSignIn}>Login</s.ButtonAuth>
      </s.Container>
    </s.Section>
  );
};
