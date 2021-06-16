import React, { useState } from "react";
import Form from "./form";
import Joi from "joi-browser";
import { registerUser } from "../services/authService";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
    repeatPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({
        language: { any: { allowOnly: "must match password" } },
      })
      .label("Confimartion password"),
  };

  const fields = [
    {
      value: data.email,
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "e.g. johndoe@gmail.com",
    },
    {
      value: data.password,
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "*********",
    },
    {
      value: data.repeatPassword,
      type: "password",
      name: "repeatPassword",
      label: "Confirmation password",
      placeholder: "*********",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});

    if (errors) return;

    registerUser(data)
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
      state={data}
      setState={setData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      fields={fields}
      title="Register"
      submitBtnText="Sign Up"
      errors={errors}
    />
  );
}

export default Register;
