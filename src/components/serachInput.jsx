import React from "react";

function SearchInput() {
  return (
    <div className="relative">
      <i className="fa fa-search outline-none focus:outline-none absolute bottom-7 left-9 text-xl"></i>
      <input
        type="text"
        className="outline-none rounded shadow-lg py-2 pl-11 px-5 m-5 text-dark text-xl focus:border-green-400"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchInput;
