import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

const LoginPage = () => {
  return (
    <>
      <Section title="Please login">
        <LoginForm />
      </Section>
    </>
  );
};

export default LoginPage;
