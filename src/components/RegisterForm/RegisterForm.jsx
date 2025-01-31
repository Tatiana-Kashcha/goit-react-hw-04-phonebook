import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import * as s from './RegisterForm.styled';

export const RegisterForm = () => {
  const auth = getAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await createUserWithEmailAndPassword(
        auth,
        form.elements.email.value,
        form.elements.password.value
      );
      await updateProfile(auth.currentUser, {
        displayName: form.elements.name.value,
      });
    } catch (error) {
      console.log(error);
    }

    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Username
        <input type="text" name="name" required />
      </s.Label>
      <s.Label>
        Email
        <input type="email" name="email" required />
      </s.Label>
      <s.Label>
        Password
        <input type="password" name="password" required />
      </s.Label>
      <button type="submit">Register</button>
    </s.Form>
  );
};
