import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as s from './Logout.styled';

export const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/', { replace: true });
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
