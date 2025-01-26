import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }

    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Email
        <input type="email" name="email" required />
      </s.Label>
      <s.Label>
        Password
        <input type="password" name="password" required />
      </s.Label>
      <button type="submit">Log In</button>
    </s.Form>
  );
};
