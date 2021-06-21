import React from "react";
import { Link } from "react-router-dom";

function ThanksPage() {
  return (
    <div className="mx-auto text-center">
      <h1 className="text-5xl font-semibold">Zamówienie zostało złożone!</h1>
      <h2 className="text-2xl mt-2 text-gray-500">
        Przesyłka zostanie dostarczona w ciągu kilku dni roboczych, dziękujemy!
      </h2>
      <Link to="/">Wróć do zakupów</Link>
    </div>
  );
}

export default ThanksPage;
