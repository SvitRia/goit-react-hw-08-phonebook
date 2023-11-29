import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegistForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}