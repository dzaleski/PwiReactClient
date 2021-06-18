import React from "react";

function SearchInput({ onChange }) {
  return (
    <input
      type="text"
      className="outline-none rounded shadow-lg py-2 px-5 text-dark text-xl focus:border-green-400"
      placeholder="Search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
