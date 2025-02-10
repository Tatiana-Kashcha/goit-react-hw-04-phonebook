import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SectionAuth } from 'components/SectionAuth/SectionAuth';

const RegisterPage = () => {
  return (
    <SectionAuth title="Please register">
      <RegisterForm />
    </SectionAuth>
  );
};

export default RegisterPage;
