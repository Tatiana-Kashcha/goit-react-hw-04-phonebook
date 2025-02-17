import { useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ReactComponent as ShowIcon } from 'icons/eye.svg';
import { ReactComponent as HideIcon } from 'icons/eye-slash.svg';

import * as s from './RegisterForm.styled';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      // Notify.success('Register is complete');
    } catch (error) {
      console.log(error);
      Notify.failure('Register error. Email already in use.');
    }

    // form.reset();
  };

  return (
    <s.Container>
      <s.Form onSubmit={handleSubmit} autoComplete="off">
        <s.Label>
          Username
          <input type="text" name="name" required />
        </s.Label>
        <s.Label>
          Email
          <input type="email" name="email" required />
        </s.Label>
        <s.Password>
          <s.Label>
            Password
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              minLength="5"
              required
            />
          </s.Label>

          <s.ToggleShowHide type="button" onClick={handleShowPassword}>
            {showPassword ? (
              <ShowIcon style={{ marginLeft: '8px' }} />
            ) : (
              <HideIcon style={{ marginLeft: '8px' }} />
            )}
          </s.ToggleShowHide>
        </s.Password>

        <s.Div>
          <button type="submit">Register</button>
        </s.Div>
      </s.Form>
    </s.Container>
  );
};
