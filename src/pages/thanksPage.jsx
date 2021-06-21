import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ThanksPage() {
  const [t] = useTranslation();
  return (
    <div className="mx-auto text-center">
      <h1 className="text-5xl font-semibold">Zamówienie zostało złożone!</h1>
      <h2 className="text-2xl mt-2 text-gray-500">
        Przesyłka zostanie dostarczona w ciągu kilku dni roboczych, dziękujemy!
      </h2>
      <div className="flex mx-auto mt-10 w-1/2 text-center text-xl font-semibold text-white shadow-lg">
        <Link
          to="/"
          className="w-full rounded bg-indigo-400 transition-all hover:bg-indigo-500 hover:shadow px-10 py-5"
        >
          {t("cartPage.continueShopping")}
        </Link>
      </div>
    </div>
  );
}

export default ThanksPage;
