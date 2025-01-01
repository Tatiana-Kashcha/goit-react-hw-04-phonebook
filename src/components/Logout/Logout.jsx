import { getAuth, signOut } from 'firebase/auth';
import * as s from './Logout.styled';

export const Logout = () => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('true');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <s.ButtonAuth onClick={handleLogout}>Logout</s.ButtonAuth>
    </>
  );
};
