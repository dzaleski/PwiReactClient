import React from "react";
import BForm from "./form.jsx";

function LoginForm({ onSubmit }) {
  const fields = [
    {
      fieldName: "email",
      label: "Email",
      placeholder: "e.g. johndoe@gmail.com",
      validation: {
        required: true,
      },
    },
    {
      fieldName: "password",
      label: "Password",
      placeholder: "*********",
      validation: {
        required: true,
        minLength: {
          value: 2,
          message: "Password should be at least 2 characters long!",
        },
        pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      },
      type: "password",
    },
  ];

  return <BForm submit={onSubmit} fields={fields} btnText="Login" />;
}

export default LoginForm;
