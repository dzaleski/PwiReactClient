import React from "react";
import Input from "./input";

function Form({ errors, fields, onSubmit, title, submitBtnText, onChange }) {
  return (
    <div className="mx-auto w-full max-w-2xl mt-10">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <p className="text-4xl tracking-tight font-bold mb-6 text-center">
          {title}
        </p>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            name={field.name}
            label={field.label}
            onChange={onChange}
            error={errors[field.name]}
          />
        ))}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {submitBtnText}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Daniel Shop - All rights reserved.
      </p>
    </div>
  );
}

export default Form;
