import React from "react";
import { useForm } from "react-hook-form";
import BInput from "./formField";
import SelectInput from "./selectInput";

function BForm({ fields, btnText, submit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => submit(data);

  const formatError = (error) => {
    let errorMessage = error.message;

    if (error.type === "required") {
      errorMessage = "This field is required";
    }

    return (
      <p className="m-0 mb-2 text-center text-red-500 text-sm">
        {errorMessage}
      </p>
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <p className="text-4xl tracking-tight font-bold mb-6 text-center">
          {btnText}
        </p>
        {fields.map((f) => {
          if (f.type === "select") {
            return (
              <SelectInput
                key={f.fieldName}
                placeholder={f.placeholder}
                fieldName={f.fieldName}
                register={register}
                validation={f.validation}
                label={f.label}
                options={f.options}
              />
            );
          }
          return (
            <span key={f.fieldName}>
              <BInput
                placeholder={f.placeholder}
                fieldName={f.fieldName}
                register={register}
                validation={f.validation}
                type={f.type}
                label={f.label}
              />

              {errors &&
                f.fieldName in errors &&
                formatError(errors[f.fieldName])}
            </span>
          );
        })}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {btnText}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Daniel Shop - All rights reserved.
      </p>
    </div>
  );
}

export default BForm;
