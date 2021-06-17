import React from "react";
import { authService } from "../services/authService";
import RegisterForm from "../components/registerForm";

function RegisterPage() {
  const tryRegister = (formFields) => {
    authService.registerUser(formFields).catch((errors) => console.log(errors));
  };

  return <RegisterForm onSubmit={tryRegister} />;
}

export default RegisterPage;
