import React, { useState } from "react";
import Form from "./form";
import Joi from "joi-browser";
import { loginUser } from "../services/authService";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const fields = [
    {
      name: "email",
      value: data.email,
      type: "text",
      label: "Email",
      placeholder: "e.g. johndoe@gmail.com",
    },
    {
      name: "password",
      value: data.password,
      type: "password",
      label: "Password",
      placeholder: "*********",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    loginUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => console.log(errors));
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);

    if (!error) return null;

    const errors = {};

    error.details.map((item) => (errors[item.path[0]] = item.message));

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newdata = { ...data };
    newdata[input.name] = input.value;

    setData(newdata);
    setErrors(newErrors);
  };

  return (
    <Form
      errors={errors}
      state={data}
      setState={setData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      fields={fields}
      title="Login"
      submitBtnText="Login"
    />
  );
}

export default Login;
