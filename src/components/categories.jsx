import React from "react";
import Category from "./category";

function Categories({ categories, onClick }) {
  return (
    <div className="rounded max-w-full flex flex-col bg-white shadow-lg">
      {categories &&
        categories.map((c) => (
          <Category
            id={c.id}
            onClick={onClick}
            key={c.id}
            categoryName={c.name}
          />
        ))}
    </div>
  );
}

export default Categories;
