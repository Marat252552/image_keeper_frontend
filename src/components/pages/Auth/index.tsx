import FormPageTemplate from "../../shared/templates/FormPageTemplate";
import { useState } from "react";
import LoginForm from "../../widgets/LoginForm";
import SigninForm from "../../widgets/SigninForm";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const CurrentForm = () => {
    if (isLoginForm) return <LoginForm setIsLoginForm={setIsLoginForm} />;
    return <SigninForm setIsLoginForm={setIsLoginForm} />;
  };

  return (
    <>
      <FormPageTemplate>
        <CurrentForm />
      </FormPageTemplate>
    </>
  );
};

export default AuthPage;
