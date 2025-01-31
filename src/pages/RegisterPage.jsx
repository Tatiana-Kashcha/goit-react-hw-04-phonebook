import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';

const RegisterPage = () => {
  return (
    <>
      <Section title="Please register">
        <RegisterForm />
      </Section>
    </>
  );
};

export default RegisterPage;
