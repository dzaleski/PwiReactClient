import React from "react";
import { useTranslation } from "react-i18next";

function ProductCard({
  id,
  imageURL,
  productName,
  description,
  price,
  onAddProduct,
}) {
  const [t] = useTranslation();

  return (
    <div className="bg-white p-2 w-80 mx-auto sm:w-full sm:p-4 h-auto sm:h-64 rounded shadow-lg flex flex-col sm:flex-row gap-5 select-none">
      <img
        src={imageURL}
        className="h-52 sm:h-full object-cover sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
        alt="Product"
      ></img>
      <div className="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
          {t("products." + productName + ".name")}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
          {t("products." + productName + ".description")}
        </p>
        <div className="flex gap-4 mt-auto">
          <span className="flex items-center gap-1 sm:text-lg border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
            <span>{price} zł</span>
          </span>
          <span className="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
            <button
              className="focus:outline-none"
              onClick={() => onAddProduct(id)}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp;
              {t("productsPage.add")}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
