import React from "react";

function SelectInput({
  fieldName,
  placeholder,
  register,
  validation,
  label,
  options,
}) {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={fieldName}>
        {label}
      </label>
      <select
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id={fieldName}
        placeholder={placeholder}
        {...register(fieldName, { ...validation })}
      >
        {options &&
          options.map((o) => (
            <option key={o.id} value={o.value}>
              {o.selectName}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectInput;
