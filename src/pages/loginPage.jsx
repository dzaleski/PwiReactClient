import React from "react";
import { authService } from "../services/authService";
import LoginForm from "../components/loginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const tryLogin = (formFields) => {
    authService
      .loginUser(formFields)
      .then(() => {
        history.push("/");
      })
      .catch((errors) => console.log(errors));
  };

  return <LoginForm onSubmit={tryLogin} />;
}

export default LoginPage;
