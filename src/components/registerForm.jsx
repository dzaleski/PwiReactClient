import React from "react";
import BForm from "./form.jsx";

function RegisterForm({ onSubmit }) {
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
        pattern: {
          value:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          message:
            "Password must be at least 8 characters long with one letter, digit and special character!",
        },
      },
      type: "password",
    },
    {
      fieldName: "repeatPassword",
      label: "Password confirmation",
      placeholder: "*********",
      validation: {
        required: true,
      },
      type: "password",
    },
  ];

  return <BForm submit={onSubmit} fields={fields} btnText="Sign Up" />;
}

export default RegisterForm;
