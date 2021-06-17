import React from "react";

function Category({ categoryName }) {
  return (
    <button className="py-4 text-xl border-b-2 border-gray-200 hover:bg-gray-100 hover:pointer focus:outline-none focus:bg-gray-100">
      {categoryName}
    </button>
  );
}

export default Category;
