import React from "react";

function Input({ value, name, onChange, label, type, placeholder, error }) {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        {label}
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-l italic">{error}</p>}
    </div>
  );
}

export default Input;
