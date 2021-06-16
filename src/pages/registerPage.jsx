import React from "react";
import { registerUser } from "../services/authService";
import RegisterForm from "../components/registerForm";

function RegisterPage() {
  const tryRegister = (formFields) => {
    registerUser(formFields)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => console.log(errors));
  };

  return <RegisterForm onSubmit={tryRegister} />;
}

export default RegisterPage;
