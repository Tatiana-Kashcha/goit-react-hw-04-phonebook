import { getAuth, signOut } from 'firebase/auth';
import * as s from './Logout.styled';

export const Logout = () => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <s.ButtonAuth onClick={handleLogout}>Logout</s.ButtonAuth>
    </>
  );
};
