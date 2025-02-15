import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as s from './LoginForm.styled';

export const LoginForm = () => {
  const auth = getAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.elements.email.value,
        form.elements.password.value
      );
      if (userCredential) {
        Notify.success('Login is complete');
      }
      console.log(userCredential);
    } catch (error) {
      console.log(error);
      Notify.failure('Login error. Please check the data.');
    }
    // form.reset();
  };

  return (
    <s.Container>
      <s.Form onSubmit={handleSubmit} autoComplete="off">
        <s.Label>
          Email
          <input type="email" name="email" required />
        </s.Label>
        <s.Label>
          Password
          <input type="password" name="password" required />
        </s.Label>
        <s.Div>
          <button type="submit">Log In</button>
        </s.Div>
      </s.Form>
    </s.Container>
  );
};
