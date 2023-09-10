import styles from "./lib/styles.module.css";
import FormPageTemplate from "../../shared/templates/FormPageTemplate";
import { useState } from "react";
import LoginForm from "./elements/LoginForm";
import SigninForm from "./elements/SigninForm";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const CurrentForm = () => {
    if (isLoginForm) return <LoginForm setIsLoginForm={setIsLoginForm} />;
    return <SigninForm setIsLoginForm={setIsLoginForm} />;
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: 'flex',
          justifyContent: "center"
        }}
      >
        <FormPageTemplate>
          <div className={styles.container}>
            <CurrentForm />
          </div>
        </FormPageTemplate>
      </div>
    </>
  );
};

export default AuthPage;
