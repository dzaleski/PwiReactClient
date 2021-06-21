import React from "react";
import { useTranslation } from "react-i18next";

function SearchInput({ onChange }) {
  const [t] = useTranslation();

  return (
    <input
      type="text"
      className="outline-none rounded shadow-lg py-2 px-5 text-dark text-xl focus:border-green-400"
      placeholder={t("productsPage.search")}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
