import React from "react";

function BInput({
  fieldName,
  placeholder,
  register,
  validation,
  type = "text",
  label,
}) {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={fieldName}>
        {label}
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id={fieldName}
        type={type}
        placeholder={placeholder}
        {...register(fieldName, { ...validation })}
      />
    </div>
  );
}

export default BInput;
