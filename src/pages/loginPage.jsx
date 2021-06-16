import React, { useState } from "react";
import { loginUser } from "../services/authService";
import LoginForm from "../components/loginForm";

function LoginPage() {
  const [errors, setErrors] = useState(false);

  const tryLogin = (formFields) => {
    loginUser(formFields)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => console.log(errors));
  };

  return <LoginForm onSubmit={tryLogin} />;
}

export default LoginPage;
