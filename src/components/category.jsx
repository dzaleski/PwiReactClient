import React from "react";

function Category({ categoryName, onClick, id }) {
  return (
    <button
      onClick={() => onClick(id)}
      className="py-4 text-xl transition-all border-b-2 border-gray-200 hover:bg-gray-100 hover:pointer focus:outline-none outline-none focus:bg-gray-100"
    >
      {categoryName}
    </button>
  );
}

export default Category;
