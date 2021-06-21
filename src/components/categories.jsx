import React from "react";
import { useTranslation } from "react-i18next";
import Category from "./category";

function Categories({ categories, onClick }) {
  const [t] = useTranslation();

  return (
    <div className="rounded max-w-full flex flex-col bg-white shadow-lg">
      {categories &&
        categories.map((c) => (
          <Category
            id={c.id}
            onClick={onClick}
            key={c.id}
            categoryName={t("categories." + c.name)}
          />
        ))}
    </div>
  );
}

export default Categories;
