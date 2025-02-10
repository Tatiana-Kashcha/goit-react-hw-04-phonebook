import { LoginForm } from 'components/LoginForm/LoginForm';
import { SectionAuth } from 'components/SectionAuth/SectionAuth';

const LoginPage = () => {
  return (
    <SectionAuth title="Please login">
      <LoginForm />
    </SectionAuth>
  );
};

export default LoginPage;
