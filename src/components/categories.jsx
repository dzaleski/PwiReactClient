import React from "react";
import Category from "./category";

function Categories({ categories }) {
  return (
    <div className="rounded max-w-full flex flex-col bg-white shadow-lg m-5">
      {categories.map((c) => (
        <Category categoryName={c.categoryName} />
      ))}
    </div>
  );
}

export default Categories;
